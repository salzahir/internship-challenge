import express from 'express';
import dotenv from 'dotenv';
import coinRoutes from "./src/routes/coin-routes";
import rateLimit from 'express-rate-limit';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);
app.use(express.json());

app.use("/", coinRoutes);

export default app;


