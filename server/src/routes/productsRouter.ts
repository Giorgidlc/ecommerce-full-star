import {Router} from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProductById} from '../controllers/productControllers.ts';

// , createProduct, updateProduct, deleteProduct

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/', createProduct);
productRouter.put('/:id', updateProduct);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/:id', deleteProductById);

export default productRouter;
