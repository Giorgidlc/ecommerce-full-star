import { Request, Response } from "express";
declare const getProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteProductById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteProductByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getusers, getProduct, createProduct, updateProduct, deleteProductById, deleteProductByName };
