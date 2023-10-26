import { Request,Response } from "express";
import shoppingCartModel from "../models/shoppingCartModel";

const getShoppingCarts = async (_req: Request, res: Response) => {
    try {
        const shoppingCarts = await shoppingCartModel.findAll();
        
        if(!shoppingCarts){return res.status(404).json({message:'Shopping Carts not found'})}
        return res.status(200).json(shoppingCarts)
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}

const getShoppingCart = async (req: Request, res:Response ) => {
    try {
        const  shoppingCartId = req.params.id;
        const shoppingCart = await shoppingCartModel.findById(shoppingCartId);
        
        if(!shoppingCart){return res.status(404).json({message:'Shopping Cart not found'}) }
        return res.status(200).json(shoppingCart);
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}

const createShoppingCart = async (req: Request, res: Response) => {
    try {
        const newShoppingCart = await shoppingCartModel.create(req.body);
        
        if(!newShoppingCart){return res.status(400).json({message:'Need to Introduce Body Data'})}
        return res.status(201).json({message:'The Shopping Cart has been created succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const updateShoppingCart = async (req: Request, res: Response) => {
    try {
        const shoppingCartId = req.params.id;
        const updatedUser = await shoppingCartModel.update(req.body, shoppingCartId);
        
        if(!updatedUser){return res.status(400).json({message:'Need to Introduce Body Data'})}
        return res.status(200).json({message:'The Shopping Cart has been updated succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const deleteShoppingCartById = async (req: Request, res: Response) => {
    try {
        const shoppingCartId = req.params.id;
        const eliminatedShoppingCart = await shoppingCartModel.eliminateById(shoppingCartId);

        if(!eliminatedShoppingCart){return res.status(404).json({message:'Shopping Cart Not Found'})}
        return res.json({message:'The Shopping Cart has been eliminated succesfully'});
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}

const deleteShoppingCartByName = async (req: Request, res: Response) => {
    try {
        const shoppingCartId = req.params.id;
        const eliminatedShoppingCart = await shoppingCartModel.eliminateById(shoppingCartId);

        if(!eliminatedShoppingCart){return res.status(404).json({message:'Shopping Cart Not Found'})}
        return res.json({message:'The Shopping Cart has been eliminated succesfully'});
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}

export {getShoppingCarts, getShoppingCart, createShoppingCart, updateShoppingCart, deleteShoppingCartById, deleteShoppingCartByName};