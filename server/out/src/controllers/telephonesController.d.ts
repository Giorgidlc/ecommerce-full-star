import { Request, Response } from 'express';
declare const getTelephones: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createTelephone: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getTelephoneById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateTelephone: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteTelephone: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getTelephones, createTelephone, getTelephoneById, updateTelephone, deleteTelephone, };
