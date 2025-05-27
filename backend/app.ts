import express from 'express';
import dotenv from 'dotenv';
import coinRoutes from "./src/routes/coin-routes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/", coinRoutes);

export default app;


