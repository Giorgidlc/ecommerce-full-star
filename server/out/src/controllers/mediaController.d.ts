import { Request, Response } from 'express';
declare const getMedia: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createMedia: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateMedia: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteMedia: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getMedia, createMedia, updateMedia, deleteMedia };
