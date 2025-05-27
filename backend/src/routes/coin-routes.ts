import * as coinController from '../controllers/coin-controller';
import { Router } from 'express';

const router = Router();

// Route to get the home page with API health check
router.get('/', coinController.getHome);

// Route to get coin data for a specific symbol, e.g., /bitcoin, /ethereum
// Example test routes:
// GET /bitcoin
// GET /ethereum
// GET /dogecoin
// GET /solana
// GET /cardano

router.get('/:symbol', coinController.getCoinData);

export default router;