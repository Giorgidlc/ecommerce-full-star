import { Request, Response } from 'express';
declare const getRoles: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteRoleById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getRoles, getRole, createRole, updateRole, deleteRoleById };
