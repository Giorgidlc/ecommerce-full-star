import { Request,Response } from "express";
import UserModel from "../models/userModel.ts";

const getUsers = async (_req: Request, res: Response) => {
    try {

        const users = await UserModel.findAll();
        
        if(!users){return res.status(404).json({message:'Users not found'})}
        return res.status(200).json(users)
         
    } catch (error : unknown ) {

        return res.status(500).json({message:(error as Error).message})
    }

}

const getProduct = async (req: Request, res:Response ) => {
    try {
        const  productId = req.params.id;
        const product = await UserModel.findById(productId);
        
        if(!product){ return res.status(404).json({message:'Product not found'}) }
        return res.status(200).json(product);
        
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }


}

const createProduct = async (req: Request, res: Response) => {
    try {
        
       const newProduct = await UserModel.create(req.body);
       
       if(!newProduct){return res.status(400).json({message:'Need to Introduce Body Data'})}
       return  res.status(201).json({message:'The Product has been created succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const updateProduct = async (req: Request, res: Response) => {

    try {
        const  productId = req.params.id;
        const updatedProduct = await UserModel.update(req.body, productId);
        
        if(!updatedProduct){return res.status(400).json({message:'Need to Introduce Body Data'})}
         return res.status(200).json({message:'The Product has been updated succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const  productId = req.params.id;
        const eliminatedProduct = await UserModel.eliminateById(productId);

        if(!eliminatedProduct){return res.status(404).json({message:'Product Not Found'})}
        return res.json({message:'The Product has been eliminated succesfully'});
        
    } catch (error : unknown ) {
         return res.status(500).json({message:(error as Error).message})
    }
}


const deleteProductByName = async (req: Request, res: Response) => {
    try {
        const  productId = req.params.id;
        const eliminatedProduct = await UserModel.eliminateById(productId);

        if(!eliminatedProduct){return res.status(404).json({message:'Product Not Found'})}
        return res.json({message:'The Product has been eliminated succesfully'});
        
    } catch (error : unknown ) {
         return res.status(500).json({message:(error as Error).message})
    }
}




export {getusers, getProduct, createProduct, updateProduct,deleteProductById,deleteProductByName};
