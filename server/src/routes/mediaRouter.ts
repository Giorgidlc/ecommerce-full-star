import express from 'express';
import * as mediaController from '../controllers/mediaController';

const router = express.Router();

router.get('/media', mediaController.getMedia);
router.post('/media', mediaController.createMedia);
router.put('/media/:id', mediaController.updateMedia);
router.delete('/media/:id', mediaController.deleteMedia);

export default router;
