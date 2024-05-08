import Blockchain from '../models/blockchainModel.js';

const myBlockchain = new Blockchain();

const addBlock = (req, res) => {
    const newBlockData = req.body.data;
    const newBlock = new Block(myBlockchain.chain.length, newBlockData);
    myBlockchain.addBlock(newBlock);
    res.status(201).send(newBlock);
};

const getBlockchain = (req, res) => {
    res.send(myBlockchain);
};

const getBlock = (req, res) => {
    const block = myBlockchain.chain[req.params.index];
    if (block) {
        res.send(block);
    } else {
        res.status(404).send('Block not found');
    }
};

export { addBlock, getBlockchain, getBlock };
