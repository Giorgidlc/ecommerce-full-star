import { Router } from 'express';
import { getPayingMethods, createPayingMethod, deletePayingMethod } from '../controllers/payingMethodsController';

const payingMethodsRouter = Router();

payingMethodsRouter.get('/', getPayingMethods);
payingMethodsRouter.post('/', createPayingMethod);
payingMethodsRouter.delete('/:id', deletePayingMethod);

export default payingMethodsRouter;
