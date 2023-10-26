import { Router } from 'express';
import { getRoles, getRole, createRole, updateRole, deleteRoleById } from '../controllers/roleController';

const roleRouter = Router();

roleRouter.get('/', getRoles);
roleRouter.get('/:id', getRole);
roleRouter.post('/', createRole);
roleRouter.put('/:id', updateRole);
roleRouter.patch('/:id', updateRole);
roleRouter.delete('/:id', deleteRoleById);

export default roleRouter;
