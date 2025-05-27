import axios from 'axios';

function getApiKey(): string {
    const apiKey = process.env.COIN_API_KEY;
    if (!apiKey) {
        throw new Error("COIN_API_KEY is not defined in the environment variables.");
    }
    return apiKey;
}

async function apiHealthCheck() {
    try {
        const apiKey = getApiKey();
        const url = `https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=${apiKey}`;
        const response = await axios.get(url);
        return response.data;
    }   catch (error) {
        console.error("Error checking API health:", error);
        throw error;
    }
}

async function fetchCoinData(symbol: string = "default") {
    console.log("Fetching coin data...");
    try {
        const apiKey = getApiKey();
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

export { apiHealthCheck, fetchCoinData };

