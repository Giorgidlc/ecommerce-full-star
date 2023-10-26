import { Request, Response } from 'express';
import RoleModel from '../models/roleModel.ts';

const getRoles = async (_req: Request, res: Response) => {
    try {
    const roles = await RoleModel.findAll();

    if (!roles) {
        return res.status(404).json({ message: 'Roles not found' });
    }
    return res.status(200).json(roles);
    } catch (error: unknown) {
    return res.status(500).json({ message: (error as Error).message });
    }
};

const getRole = async (req: Request, res: Response) => {
    try {
    const roleId = req.params.id;
    const role = await RoleModel.findById(roleId);

    if (!role) {
        return res.status(404).json({ message: 'Role not found' });
    }
    return res.status(200).json(role);
    } catch (error: unknown) {
    return res.status(500).json({ message: (error as Error).message });
    }
};

const createRole = async (req: Request, res: Response) => {
    try {
    const newRole = await RoleModel.create(req.body);

    if (!newRole) {
        return res.status(400).json({ message: 'Need to Introduce Body Data' });
    }
    return res.status(201).json({ message: 'The Role has been created successfully' });
    } catch (error: unknown) {
    return res.status(500).json({ message: (error as Error).message });
    }
};

const updateRole = async (req: Request, res: Response) => {
    try {
    const roleId = req.params.id;
    const updatedRole = await RoleModel.update(req.body, roleId);

    if (!updatedRole) {
        return res.status(400).json({ message: 'Need to Introduce Body Data' });
    }
    return res.status(200).json({ message: 'The Role has been updated successfully' });
    } catch (error: unknown) {
    return res.status(500).json({ message: (error as Error).message });
    }
};

const deleteRoleById = async (req: Request, res: Response) => {
    try {
    const roleId = req.params.id;
    const eliminatedRole = await RoleModel.eliminateById(roleId);

    if (!eliminatedRole) {
        return res.status(404).json({ message: 'Role Not Found' });
    }
    return res.json({ message: 'The Role has been eliminated successfully' });
    } catch (error: unknown) {
    return res.status(500).json({ message: (error as Error).message });
    }
};

export { getRoles, getRole, createRole, updateRole, deleteRoleById };


