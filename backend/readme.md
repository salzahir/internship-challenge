# CoinStats API – Real-Time Crypto Data in One Line

A lightweight REST API that fetches and provides summary statistics for cryptocurrencies using the CoinGecko API.

## Tech Stack
- Node.js
- Express.js
- TypeScript
- Axios
- dotenv
- express-rate-limit

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your CoinGecko API key:
   ```
   COIN_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Health Check
**Request:**
- Method: GET
- URL: `http://localhost:3000/health`

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "timestamp": "2024-03-14T12:00:00.000Z",
  "uptime": 3600,
  "environment": "development"
}
```

### Get Home
**Request:**
- Method: GET
- URL: `http://localhost:3000/`

**Postman Setup:**
1. Create a new request
2. Set method to GET
3. Enter URL: `http://localhost:3000/`
4. Click Send

### Get Coin Data
**Request:**
- Method: GET
- URL: `http://localhost:3000/coin/{symbol}`
- Example: `http://localhost:3000/coin/bitcoin`

**Postman Setup:**
1. Create a new request
2. Set method to GET
3. Enter URL: `http://localhost:3000/coin/bitcoin`
4. Click Send

## Response Format

The API returns cryptocurrency data in the following format:
```json
{
  "id": "bitcoin",
  "symbol": "btc",
  "name": "Bitcoin",
  "current_price": 50000,
  "market_cap": 1000000000,
  "total_volume": 50000000,
  "price_change_percentage_24h": 2.5,
  "market_cap_rank": 1
}
```

## Features

- Real-time cryptocurrency data
- Rate limiting (100 requests per 15 minutes)
- Health check endpoint
- Error handling
- TypeScript implementation

## Future Improvements

- [ ] Add request validation and user input sanitation  
- [ ] Improve error handling for edge cases  
- [ ] Add unit/integration tests with Jest or Supertest  
- [ ] Expand to support historical data and charts  
- [ ] Deploy to Vercel or Render for public access  
