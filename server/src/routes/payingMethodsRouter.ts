import { Router } from 'express';
import { getPayingMethods, createPayingMethod, deletePayingMethod } from '../controllers/payingMethodsController.ts';

const payingMethodsRouter = Router();

payingMethodsRouter.get('/', getPayingMethods);
payingMethodsRouter.post('/', createPayingMethod);
payingMethodsRouter.delete('/', deletePayingMethod);

export default payingMethodsRouter;
