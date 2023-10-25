import express,{Request, Response} from 'express';
import productRouter from './routes/productsRouter.ts';
import userRouter from './routes/userRouter.ts';
import shoppingCartRouter from './routes/shoppingCartRouter.ts';
import shoppingCartDetailsRouter from './routes/shoppingCartDetailsRouter.ts';
import roles from '.routes/roleRoutes.ts';
import cors from 'cors';


const app = express();
const port = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/shoppingCart', shoppingCartRouter);


app.get('/', (_req, res) => {
  res.status(200).send('Welcome to the Dreams and Coockies Server!!!');
  res.end()
})
const server = app.listen(port, () => console.log(`Running on port http://localhost:${port}`));


export {server, app};







