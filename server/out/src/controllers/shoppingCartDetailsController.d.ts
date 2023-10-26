import { Request, Response } from "express";
declare const getShoppingCartsDetails: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getShoppingCartDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createShoppingCartDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateShoppingCartDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteShoppingCartDetailById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getShoppingCartsDetails, getShoppingCartDetail, createShoppingCartDetail, updateShoppingCartDetail, deleteShoppingCartDetailById };
