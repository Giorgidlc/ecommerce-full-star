import { Request, Response } from 'express';
declare const getUserRoles: (_req: Request, res: Response) => Promise<void>;
declare const createUserRole: (req: Request, res: Response) => Promise<void>;
declare const deleteUserRole: (req: Request, res: Response) => Promise<void>;
export { getUserRoles, createUserRole, deleteUserRole };
