import { Request, Response } from "express";
import DiscountsModel from "../models/discountsModel";

const getDiscounts = async (_req: Request, res: Response) => {
    try {
        const discounts = await DiscountsModel.findAll();
        return res.status(200).json(discounts);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const getDiscount = async (req: Request, res: Response) => {
    try {
        const discountId = req.params.id;
        const discount = await DiscountsModel.findById(discountId);
        
        if (!discount) {
        return res.status(404).json({ message: 'Discount not found' });
        }
        
        return res.status(200).json(discount);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const createDiscount = async (req: Request, res: Response) => {
    try {
        const newDiscount = await DiscountsModel.create(req.body);
        
        if (!newDiscount) {
        return res.status(400).json({ message: 'Invalid data provided' });
        }
        
        return res.status(201).json({ message: 'Discount created successfully' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const updateDiscount = async (req: Request, res: Response) => {
    try {
        const discountId = req.params.id;
        const updatedDiscount = await DiscountsModel.update(req.body, discountId);
        
        if (!updatedDiscount) {
        return res.status(400).json({ message: 'Invalid data provided' });
        }
        
        return res.status(200).json({ message: 'Discount updated successfully' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteDiscountById = async (req: Request, res: Response) => {
    try {
        const discountId = req.params.id;
        const deletedDiscount = await DiscountsModel.delete(discountId);

        if (!deletedDiscount) {
        return res.status(404).json({ message: 'Discount not found' });
        }
        
        return res.status(200).json({ message: 'Discount deleted successfully' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export {getDiscounts,getDiscount,createDiscount,updateDiscount,deleteDiscountById,};
