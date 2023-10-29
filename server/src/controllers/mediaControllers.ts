import { Request, Response } from "express";
import MediaModel from "../models/mediaModel.ts";

export const uploadMedia = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).send('No se subió ningún archivo');
    }

    try {
        const filePath = req.file.path;
        console.log("Archivo subido a:", filePath);

        const fileType = req.file.mimetype.split("/")[0];

        const media = await MediaModel.create({
            media_type: fileType,
            media_path: filePath,
            product_id: req.body.product_id  // Asumiendo que estás enviando el ID del producto con el formulario de archivo
        });

        res.status(200).json({
            message: `Archivo subido con éxito. Ruta: ${filePath}`,
            media
        });

    } catch (error: unknown) {
        res.status(500).json({ message: (error as Error).message });
    }
}

export const getBackgroundVideo = async (req: Request, res: Response) => {
    try {
        const videoPath = "/static/videos/Background_1.mp4"; 
        res.json({ path: videoPath });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllImages = async (req: Request, res: Response) => {
    try {
        const images = await MediaModel.find({ media_type: 'image' });
        if (images && images.length > 0) {
            const imagePaths = images.map(img => img.media_path);
            res.json(imagePaths);
        } else {
            res.status(404).json({ message: 'Imágenes no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
    export default uploadMedia;
