import { Request, Response } from "express";
import MediaModel from "../models/mediaModel.ts";

export const uploadMedia = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).send('No se subió ningún archivo');
    }

    try {
        const filePath = req.file.path;
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

    } catch (error : unknown) {
        res.status(500).json({ message: (error as Error).message });
    }
}

export default uploadMedia;
