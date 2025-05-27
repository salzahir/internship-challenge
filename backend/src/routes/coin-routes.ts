import * as coinController from '../controllers/coin-controller';
import { Router } from 'express';

const router = Router();

// Route to get coin data for a specific symbol, e.g., /bitcoin, /ethereum
// router.get('/', coinController.getHome);
router.get('/:symbol', coinController.getCoinData);

// Example test routes:
// GET /bitcoin
// GET /ethereum
// GET /dogecoin
// GET /solana
// GET /cardano

export default router;