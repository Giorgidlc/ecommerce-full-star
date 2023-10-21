import {Router} from 'express';
import {getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/userControllers.ts';

const userRouter = Router();

userRouter.get('/', getUser);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
