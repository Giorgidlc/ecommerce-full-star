import { Request, Response } from 'express';
import PayingMethodsModel from '../models/payingMethodsModel.ts';

const getPayingMethods = async (_req: Request, res: Response) => {
    try {
        const payingMethods = await PayingMethodsModel.findAll();
        res.status(200).json(payingMethods);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

const createPayingMethod = async (req: Request, res: Response) => {
    try {
        const { paying_method_name } = req.body;
        const newPayingMethod = await PayingMethodsModel.create(paying_method_name);
        res.status(201).json({ message: 'Paying method created successfully', newPayingMethod });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

const deletePayingMethod = async (req: Request, res: Response) => {
    try {
        const { paying_method_id } = req.body;
        await PayingMethodsModel.delete(paying_method_id);
        res.status(200).json({ message: 'Paying method deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export { getPayingMethods, createPayingMethod, deletePayingMethod };
