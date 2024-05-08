import crypto from 'crypto';

class Block {
  constructor(index, data, precedingHash = '') {
    this.index = index;
    this.timestamp = Date.now();
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return crypto.createHash('sha256').update(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data) + this.nonce).digest('hex');
  }

  proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    return new Block(0, { isGenesis: true }, "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.precedingHash = this.getLatestBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.chain.push(newBlock);
  }
}

export default Blockchain;
