import { Request, Response } from "express";
declare const getShoppingCarts: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getShoppingCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createShoppingCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateShoppingCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteShoppingCartById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteShoppingCartByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getShoppingCarts, getShoppingCart, createShoppingCart, updateShoppingCart, deleteShoppingCartById, deleteShoppingCartByName };
