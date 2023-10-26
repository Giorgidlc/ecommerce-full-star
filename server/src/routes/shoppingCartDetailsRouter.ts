import {Router} from 'express';
import {getShoppingCartDetail, getShoppingCartsDetails, createShoppingCartDetail, updateShoppingCartDetail, deleteShoppingCartDetailById} from '../controllers/shoppingCartDetailsController.ts'

const shoppingCartRouter = Router();

shoppingCartRouter.get('/', getShoppingCartsDetails);
shoppingCartRouter.get('/:id', getShoppingCartDetail);
shoppingCartRouter.post('/', createShoppingCartDetail);
shoppingCartRouter.put('/:id', updateShoppingCartDetail);
shoppingCartRouter.patch('/:id', updateShoppingCartDetail);
shoppingCartRouter.delete('/:id', deleteShoppingCartDetailById);

export default shoppingCartRouter;