import express,{Request, Response} from 'express';
import productRouter from './routes/productsRouter';
import userRouter from './routes/userRouter';
import shoppingCartRouter from './routes/shoppingCartRouter';
import shoppingCartDetailsRouter from './routes/shoppingCartDetailsRouter';
import roleRouter from './routes/roleRouter';
import userRolesRouter from './routes/userRolesRouter';
import payingMethodsRouter from './routes/payingMethodsRouter';
import productTypesRouter from './routes/productTypesRouter';
import telephonesRouter from './routes/telephonesRouter';
import discountsRouter from './routes/discountsRouter';
import mediaRouter from './routes/mediaRouter';
import billingInfoRouter from './routes/billingInfoRouter';
import cors from 'cors';


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/shoppingCart', shoppingCartRouter);
app.use('/billingInfo', billingInfoRouter);
app.use('/discounts', discountsRouter);
app.use('/media', mediaRouter);
app.use('/payingMethods', payingMethodsRouter);
app.use('/productTypes', productTypesRouter);

app.get('/', (_req, res) => {
  res.status(200).send('Welcome to the Dreams and Coockies Server!!!');
  res.end()
})
const server = app.listen(port, () => console.log(`Running on port http://localhost:${port}`));


export {server, app};







