import { Router } from 'express';
import { getUserRoles, createUserRole, deleteUserRole } from '../controllers/userRolesController';

const userRolesRouter = Router();

userRolesRouter.get('/', getUserRoles);
userRolesRouter.post('/', createUserRole);
userRolesRouter.delete('/', deleteUserRole);

export default userRolesRouter;
