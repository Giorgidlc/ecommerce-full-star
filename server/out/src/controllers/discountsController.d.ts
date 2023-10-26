import { Request, Response } from "express";
declare const getDiscounts: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getDiscount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createDiscount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateDiscount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteDiscountById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getDiscounts, getDiscount, createDiscount, updateDiscount, deleteDiscountById, };
