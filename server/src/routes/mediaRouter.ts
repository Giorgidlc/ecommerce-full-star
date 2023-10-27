import { Router } from 'express';
import upload from '../midlewares/multerConfig.ts';
import { uploadMedia, getBackgroundVideo, getAllImages } from '../controllers/mediaControllers.ts';


const mediaRouter = Router();

mediaRouter.post('/', upload.single('file'), uploadMedia);

mediaRouter.get('/background-video', getBackgroundVideo);
mediaRouter.get('/images', getAllImages);

export default mediaRouter;
