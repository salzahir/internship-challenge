import { fetchCoinData } from '../services/api';
import { apiHealthCheck } from '../services/api';
import { Request, Response } from 'express';


async function getHome(req: Request, res: Response) {
    const health = await apiHealthCheck();
    return res.json({
        message: "Welcome to the Coin API",
        health: health,
        timestamp: new Date().toISOString()
    });
}

async function getCoinData(req: Request, res: Response) {
    try {
        const symbol = req.params.symbol || 'bitcoin';
        const coinData = await fetchCoinData(symbol);
        res.json(coinData);
    } catch (error) {
        console.error("Error in getCoinData:", error);
        res.status(500).json({ error: "Failed to fetch coin data" });
    }
}

export { getHome, getCoinData };