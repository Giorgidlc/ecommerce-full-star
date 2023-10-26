import { Request, Response } from 'express';
import UserRolesModel from '../models/userRolesModel';

const getUserRoles = async (_req: Request, res: Response) => {
    try {
        const userRoles = await UserRolesModel.findAll();
        res.status(200).json(userRoles);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
    };

const createUserRole = async (req: Request, res: Response) => {
    try {
        const { role_id, user_id } = req.body;
        const newUserRole = await UserRolesModel.create(role_id, user_id);
        res.status(201).json({ message: 'User role created successfully', newUserRole });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
    };

const deleteUserRole = async (req: Request, res: Response) => {
    try {
        const { role_id, user_id } = req.body;
        await UserRolesModel.delete(role_id, user_id);
        res.status(200).json({ message: 'User role deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
    };

export { getUserRoles, createUserRole, deleteUserRole };
