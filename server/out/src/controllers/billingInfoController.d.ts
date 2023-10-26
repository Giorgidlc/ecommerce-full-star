import { Request, Response } from 'express';
declare const getBillingInfo: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createBillingInfo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateBillingInfo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteBillingInfo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getBillingInfo, createBillingInfo, updateBillingInfo, deleteBillingInfo };
