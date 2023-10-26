import express from 'express';
import {
    getTelephones,
    createTelephone,
    getTelephoneById,
    updateTelephone,
    deleteTelephone,
} from '../controllers/telephonesController.ts';

const router = express.Router();

router.get('/telephones', getTelephones);
router.post('/telephones', createTelephone);
router.get('/telephones/:id', getTelephoneById);
router.put('/telephones/:id', updateTelephone);
router.delete('/telephones/:id', deleteTelephone);

export default router;
