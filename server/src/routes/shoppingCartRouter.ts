import {Router} from 'express';
import {getShoppingCarts, getShoppingCart, createShoppingCart, updateShoppingCart, deleteShoppingCartById} from '../controllers/shoppingCartController.ts'

const shoppingCartRouter = Router();

shoppingCartRouter.get('/', getShoppingCarts);
shoppingCartRouter.get('/:id', getShoppingCart);
shoppingCartRouter.post('/', createShoppingCart);
shoppingCartRouter.put('/:id', updateShoppingCart);
shoppingCartRouter.patch('/:id', updateShoppingCart);
shoppingCartRouter.delete('/:id', deleteShoppingCartById);

export default shoppingCartRouter;