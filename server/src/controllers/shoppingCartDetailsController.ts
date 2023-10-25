import { Request, Response } from "express";
import ShoppingCartDetailsModel from "../models/shoppingCartDetailsModel";

const getShoppingCartsDetails = async (_req: Request, res: Response) => {
    try {
        const shoppingCartDetails = await ShoppingCartDetailsModel.findAll();

        if (!shoppingCartDetails) {return res.status(404).json({ message: 'Shopping Cart Details not found' });}
        return res.status(200).json(shoppingCartDetails);

    } catch (error: unknown) {
        return res.status(500).json({ message: (error as Error).message });
    }
}

const getShoppingCartDetail = async (req: Request, res: Response) => {
    try {
        const shoppingCartDetailId = req.params.id;
        const shoppingCartDetail = await ShoppingCartDetailsModel.findById(shoppingCartDetailId);

        if (!shoppingCartDetail) {return res.status(404).json({ message: 'Shopping Cart Detail not found' });}
        return res.status(200).json(shoppingCartDetail);

    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}

const createShoppingCartDetail = async (req: Request, res: Response) => {
    try {
        const newShoppingCartDetail = await ShoppingCartDetailsModel.create(req.body);

        if (!newShoppingCartDetail) {
            return res.status(400).json({ message: 'Need to Introduce Body Data' });
        }
        return res.status(201).json({ message: 'The Shopping Cart Detail has been created successfully' });

    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
}

const updateShoppingCartDetail = async (req: Request, res: Response) => {
    try {
        const shoppingCartDetailId = req.params.id;
        const updatedShoppingCartDetail = await ShoppingCartDetailsModel.update(req.body, shoppingCartDetailId);

        if (!updatedShoppingCartDetail) {
            return res.status(400).json({ message: 'Need to Introduce Body Data' });
        }
        return res.status(200).json({ message: 'The Shopping Cart Detail has been updated successfully' });

    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
}

const deleteShoppingCartDetailById = async (req: Request, res: Response) => {
    try {
        const shoppingCartDetailId = req.params.id;
        const eliminatedShoppingCartDetail = await ShoppingCartDetailsModel.eliminateById(shoppingCartDetailId);

        if (!eliminatedShoppingCartDetail) {
            return res.status(404).json({ message: 'Shopping Cart Detail Not Found' });
        }
        return res.json({ message: 'The Shopping Cart Detail has been eliminated successfully' });

    } catch (error: unknown) {
        return res.status(500).json({ message: (error as Error).message });
    }
}

export {getShoppingCartsDetails, getShoppingCartDetail, createShoppingCartDetail, updateShoppingCartDetail, deleteShoppingCartDetailById};
