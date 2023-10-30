import { Request, Response } from 'express';
import PayingMethodsModel from '../models/payingMethodsModel';

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
        const paying_method_name  = req.body;
        const newPayingMethod = await PayingMethodsModel.create(paying_method_name);
        console.log(paying_method_name);
        if(!newPayingMethod){return res.status(400).json({message:'Need to Introduce Body Data'})}
        res.status(201).json({ message: 'Paying method created successfully' });
        return newPayingMethod
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
const updateProduct = async (req: Request, res: Response) => {

    try {
        const  productId = req.params.id;
        const updatedProduct = await PayingMethodsModel.update(req.body, productId);
        
        if(!updatedProduct){return res.status(400).json({message:'Need to Introduce Body Data'})}
         return res.status(200).json({message:'The Product has been updated succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}


export { getPayingMethods, createPayingMethod, deletePayingMethod };
