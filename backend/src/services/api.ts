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

function parseCoinSummary(coin: any) {
    return {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        total_volume: coin.total_volume,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        market_cap_rank: coin.market_cap_rank
    };
}

async function fetchCoinData(symbol: string = "default") {
    console.log("Fetching coin data...");
    try {
        const apiKey = getApiKey();
        console.log("COIN_GECKO_KEY", apiKey);
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${symbol}&x_cg_demo_api_key=${apiKey}`;
        const response = await axios.get(url);
        console.log("Response received:", response.data);
        return parseCoinSummary(response.data[0]);
    } catch (error) {
        console.error("Error fetching coin data:", error);
        throw error;
    }
}

export { apiHealthCheck, fetchCoinData };

