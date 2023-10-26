import { Request, Response } from "express";
declare const getUsers: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteUserByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getUsers, getUser, createUser, updateUser, deleteUserById, deleteUserByName };
