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

const getUser = async (req: Request, res:Response ) => {
    try {
        const  userId = req.params.id;
        const user = await UserModel.findById(userId);
        
        if(!user){ return res.status(404).json({message:'User not found'}) }
        return res.status(200).json(user);
        
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }


}

const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await UserModel.create(req.body);
        
        if(!newUser){return res.status(400).json({message:'Need to Introduce Body Data'})}
        return res.status(201).json({message:'The User has been created succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const updateUser = async (req: Request, res: Response) => {

    try {
        const  userId = req.params.id;
        const updatedUser = await UserModel.update(req.body, userId);
        
        if(!updatedUser){return res.status(400).json({message:'Need to Introduce Body Data'})}
        return res.status(200).json({message:'The User has been updated succesfully'});
        
    } catch (error : unknown ) {
        return res.json({message:(error as Error).message})
    }
}

const deleteUserById = async (req: Request, res: Response) => {
    try {
        const  userId = req.params.id;
        const eliminatedUser = await UserModel.eliminateById(userId);

        if(!eliminatedUser){return res.status(404).json({message:'User Not Found'})}
        return res.json({message:'The User has been eliminated succesfully'});
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}


const deleteUserByName = async (req: Request, res: Response) => {
    try {
        const  userId = req.params.id;
        const eliminatedUser = await UserModel.eliminateById(userId);

        if(!eliminatedUser){return res.status(404).json({message:'User Not Found'})}
        return res.json({message:'The User has been eliminated succesfully'});
        
    } catch (error : unknown ) {
        return res.status(500).json({message:(error as Error).message})
    }
}



export {getUsers, getUser, createUser, updateUser, deleteUserById, deleteUserByName};