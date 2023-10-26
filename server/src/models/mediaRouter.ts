import { Router } from 'express';
import upload from '../midlewares/multerConfig.ts';
import uploadMedia from '../controllers/mediaControllers.ts';

const mediaRouter = Router();

mediaRouter.post('/', upload.single('file'), uploadMedia);

export default mediaRouter;
