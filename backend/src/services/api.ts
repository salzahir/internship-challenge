import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function fetchCoinData(symbol: string = "default") {
    const apiKey = process.env.COIN_API_KEY;
    console.log("Fetching coin data...");
    try {
        console.log("COIN_GECKO_KEY", apiKey);
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${symbol}&x_cg_demo_api_key=${apiKey}`;
        const response = await axios.get(url);
        console.log("Response received:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching coin data:", error);
        throw error;
    }
}

export default fetchCoinData;

// fetchCoinData("bitcoin");
// fetchCoinData("ethereum");
// fetchCoinData("dogecoin");
// fetchCoinData("solana");
// fetchCoinData("cardano");