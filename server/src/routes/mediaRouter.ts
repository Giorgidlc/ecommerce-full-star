import express from 'express';
import * as mediaController from '../controllers/mediaController';

const router = express.Router();

router.get('/', mediaController.getMedia);
router.post('/', mediaController.createMedia);
router.put('/:id', mediaController.updateMedia);
router.delete('/:id', mediaController.deleteMedia);

export default router;
