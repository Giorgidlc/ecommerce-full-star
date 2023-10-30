import { Request,Response } from "express";
import ProductModel from "../models/productModel";
import { Products } from "../types/productsTypes";

const getProducts = async (_req: Request, res: Response) => {
    try {

        const products = await ProductModel.findAll();
        
        
        if(!products){return res.status(404).json({message:'Products not found'});}
        return res.status(200).json(products);
         
    } catch (error : unknown ) {

        return res.status(500).json({message:(error as Error).message})
    }

}

const getProduct = async (req: Request, res:Response ) => {
    try {
        const  productId = req.params.id;
        const product = await ProductModel.findById(productId);
        
        if(!product){ return res.status(404).json({message:'Product not found'}) }
        return res.status(200).json(product);
        
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }


}

const createProduct = async (req: Request, res: Response) => {
    try {
        const { product_name, product_description, price, stock } = req.body;

        if (!product_name || !product_description || !price || !stock) {
            return res.status(400).json({ message: 'Invalid data. All fields are required.'});
        }
        
       const newProduct = await ProductModel.create(req.body);

       if(!newProduct){return res.status(400).json({message:'Missing Data'})}
       return  res.status(201).json({message:'The Product has been created successfully!'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const updateProduct = async (req: Request, res: Response) => {

    try {
        const  productId = req.params.id;
        const updatedProduct = await ProductModel.update(req.body, productId);
        
        if(!updatedProduct){return res.status(400).json({message:'Need to Introduce Body Data'})}
         return res.status(200).json({message:'The Product has been updated succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const deleteProductById = async (req: Request, res: Response) => {
    try {
      
        const  productId = req.params.id;
        const eliminatedProduct = await ProductModel.eliminateById(productId);

        if(!eliminatedProduct){return res.status(404).json({message:'Product Not Found'})}
        return res.json({message:'The Product has been eliminated succesfully'});
        
    } catch (error : unknown ) {
         return res.status(500).json({message:(error as Error).message})
    }
}


const deleteProductByName = async (req: Request, res: Response) => {
    try {
        const  productId = req.params.id;
        const eliminatedProduct = await ProductModel.eliminateById(productId);

        if(!eliminatedProduct){return res.status(404).json({message:'Product Not Found'})}
        return res.json({message:'The Product has been eliminated succesfully'});
        
    } catch (error : unknown ) {
         return res.status(500).json({message:(error as Error).message})
    }
}




export {getProducts, getProduct, createProduct, updateProduct,deleteProductById,deleteProductByName};
