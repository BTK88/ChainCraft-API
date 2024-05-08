import express from 'express';
import { addBlock, getBlockchain, getBlock } from '../controllers/blockchainController.js';

const router = express.Router();

router.post('/blocks', addBlock);
router.get('/blocks', getBlockchain);
router.get('/blocks/:index', getBlock);

export default router;
