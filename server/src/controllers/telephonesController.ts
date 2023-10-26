import { Request, Response } from 'express';
import TelephonesModel from '../models/telephonesModel';

const getTelephones = async (_req: Request, res: Response) => {
    try {
        const telephones = await TelephonesModel.findAll();
        return res.status(200).json(telephones);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const createTelephone = async (req: Request, res: Response) => {
    try {
        const newPhone = req.body;
        const createdPhone = await TelephonesModel.create(newPhone);
        return res.status(201).json({ message: 'Telephone created successfully', phone: createdPhone });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const getTelephoneById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const phone = await TelephonesModel.findById(id);
        if (phone) {
        return res.status(200).json(phone);
        } else {
        return res.status(404).json({ message: 'Telephone not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const updateTelephone = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const updatedPhone = await TelephonesModel.update(req.body, id);
        if (updatedPhone) {
        return res.status(200).json({ message: 'Telephone updated successfully', phone: updatedPhone });
        } else {
        return res.status(404).json({ message: 'Telephone not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteTelephone = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const deleted = await TelephonesModel.delete(id);
        if (deleted) {
        return res.status(200).json({ message: 'Telephone deleted successfully' });
        } else {
        return res.status(404).json({ message: 'Telephone not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export {getTelephones,createTelephone, getTelephoneById, updateTelephone, deleteTelephone,};
