import Blockchain, { Block } from '../models/blockchainModel.js';

describe('Blockchain', () => {
  let bc;

  beforeEach(() => {
    bc = new Blockchain();
  });

  test('starts with the genesis block', () => {
    expect(bc.chain[0]).toHaveProperty('data.isGenesis', true);
  });

  test('adds a new block', () => {
    bc.addBlock(new Block(1, { amount: 100 }));
    expect(bc.chain.length).toBe(2);
    expect(bc.chain[1].data).toEqual({ amount: 100 });
  });

  test('uses Proof of Work to add blocks', () => {
    bc.addBlock(new Block(1, { amount: 100 }));
    expect(bc.chain[1].hash.substring(0, bc.difficulty)).toEqual(Array(bc.difficulty + 1).join("0"));
  });
});
