import express,{Request, Response} from 'express';
import productRouter from './routes/productsRouter';
import  cors from 'cors';


const app = express();
const port = 0;

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);


app.get('/', (_req, res) => {
  res.status(200).send('Welcome to the Dreams and Coockies Server!!!');
  res.end()
})
const server = app.listen(port, () => console.log(`Running on port http://localhost:${port}`));


export {server, app};







