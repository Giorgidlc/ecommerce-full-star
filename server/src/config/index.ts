import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path'; 
import productRouter from '../routes/productsRouter';
import mediaRouter from '../routes/mediaRouter';
import cors from 'cors';
import router from '../routes/authenticationRouter';

export const tokenSecret = process.env.TOKEN_SECRET || "defaultSecret";
export const tokenExpiration = process.env.TOKEN_EXPIRATION || "1h";

const app = express();
const port = 5000;

app.use('/static/videos', express.static(path.resolve(__dirname, './videos')));
console.log("Carpeta de videos servida:", path.resolve(__dirname, './videos'));

app.use(cors());
app.use(express.json());




app.use('/products', productRouter);
app.use('/media', mediaRouter);
app.use('/', router);

app.listen(port, () => console.log(`Running in http://localhost:${port}`));

export default app;

