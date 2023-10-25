import { Request, Response } from 'express';
import ProductTypesModel from '../models/productTypesModel.ts';

const getProductTypes = async (_req: Request, res: Response) => {
    try {
        const productTypes = await ProductTypesModel.findAll();
        res.status(200).json(productTypes);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

const getProductType = async (req: Request, res: Response) => {
    try {
        const typeId = req.params.id;
        const productType = await ProductTypesModel.findById(typeId);

        if (!productType) {
            return res.status(404).json({ message: 'Product type not found' });
        }

        res.status(200).json(productType);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

const createProductType = async (req: Request, res: Response) => {
    try {
        const newProductType = await ProductTypesModel.create(req.body);

        if (!newProductType) {
            return res.status(400).json({ message: 'Need to introduce body data' });
        }

        res.status(201).json({
            message: 'The product type has been created successfully',
            productType: newProductType,
        });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

const updateProductType = async (req: Request, res: Response) => {
    try {
        const typeId = req.params.id;
        const updatedProductType = await ProductTypesModel.update(req.body, typeId);

        if (!updatedProductType) {
            return res.status(400).json({ message: 'Need to introduce body data' });
        }

        res.status(200).json({ message: 'The product type has been updated successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

const deleteProductTypeById = async (req: Request, res: Response) => {
    try {
        const typeId = req.params.id;
        const deleted = await ProductTypesModel.delete(typeId);

        if (!deleted) {
            return res.status(404).json({ message: 'Product type not found' });
        }

        res.json({ message: 'The product type has been deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export {getProductTypes, getProductType, createProductType, updateProductType, deleteProductTypeById,};

