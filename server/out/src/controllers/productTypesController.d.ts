import { Request, Response } from 'express';
declare const getProductTypes: (_req: Request, res: Response) => Promise<void>;
declare const getProductType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const createProductType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateProductType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleteProductTypeById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { getProductTypes, getProductType, createProductType, updateProductType, deleteProductTypeById, };
