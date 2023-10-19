import { Request,Response } from "express";
import ProductModel from "../models/productModel.ts";


const getProducts = async (_req: Request, res: Response) : Promise <Response> =>{
    
    try {
        const products = await ProductModel.findAll();
        return res.json(products);
        
        

    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }

}

const getProduct = async (req: Request, res: Response) => {
    try {
        const  productId = req.params.id;
        const product = await ProductModel.findOne({ where: { id: productId } });
        res.json(product);
        
    } catch (error : unknown ) {
        res.status(500).json({message:(error as Error).message})
    }


}

const createProduct = async (req: Request, res: Response) => {
    try {
        
         let result = await ProductModel.create(req.body);
         return response.json(result)
        // res.json({message:'The Product has been created succesfully'});
        
    } catch (error : unknown ) {
        res.status(500).json({message:(error as Error).message})
    }
}

const updateProduct = async (req: Request, res: Response) => {

}

const deleteProduct = async (req: Request, res: Response) =>{

}

export {getProducts, getProduct, createProduct, updateProduct, deleteProduct};