import { Router } from 'express';
import { getProductTypes, getProductType,createProductType,updateProductType,deleteProductTypeById} from '../controllers/productTypesController';

const productTypesRouter = Router();

productTypesRouter.get('/', getProductTypes);
productTypesRouter.get('/:id', getProductType);
productTypesRouter.post('/', createProductType);
productTypesRouter.put('/:id', updateProductType);
productTypesRouter.delete('/:id', deleteProductTypeById);

export default productTypesRouter;
