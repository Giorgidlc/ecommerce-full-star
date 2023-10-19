import express from 'express';
import productRouter from './routes/productsRouter';
import cors from 'cors';

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send("jelow!!");
  res.status(200).send();
  
})



app.use('/products', productRouter)
app.listen(port, () => console.log(`Running in http://localhost:${port}`));

export default app;