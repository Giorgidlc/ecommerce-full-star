import { Request, Response } from 'express';
import MediaModel from '../models/mediaModel.ts';

const getMedia = async (_req: Request, res: Response) => {
    try {
        const media = await MediaModel.findAll();
        return res.status(200).json(media);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const createMedia = async (req: Request, res: Response) => {
    try {
        const newMedia = req.body;
        const media = await MediaModel.create(newMedia);
        return res.status(201).json({ message: 'Media created successfully', media });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const updateMedia = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedMedia = req.body;
        const media = await MediaModel.update(updatedMedia, id);
        if (media) {
        return res.status(200).json({ message: 'Media updated successfully', media });
        } else {
        return res.status(404).json({ message: 'Media not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteMedia = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await MediaModel.delete(id);
        if (result) {
        return res.status(204).send();
        } else {
        return res.status(404).json({ message: 'Media not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export { getMedia, createMedia, updateMedia, deleteMedia };
