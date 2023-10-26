import { Request, Response } from 'express';
declare const getPayingMethods: (_req: Request, res: Response) => Promise<void>;
declare const createPayingMethod: (req: Request, res: Response) => Promise<void>;
declare const deletePayingMethod: (req: Request, res: Response) => Promise<void>;
export { getPayingMethods, createPayingMethod, deletePayingMethod };
