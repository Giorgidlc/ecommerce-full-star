import 'dotenv/config';
import express, { Request, Response } from 'express';
import productRouter from '../routes/productsRouter';
import mediaRouter from '../models/mediaRouter';
import cors from 'cors';
import router from '../routes/authenticationRouter';

export const tokenSecret = process.env.TOKEN_SECRET || "defaultSecret";
export const tokenExpiration = process.env.TOKEN_EXPIRATION || "30s";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());



app.use('/products', productRouter);
app.use('/media', mediaRouter);
app.use('/', router);
app.listen(port, () => console.log(`Running in http://localhost:${port}`));

export default app;
