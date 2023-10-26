import { Router } from 'express';
import authController from '../controllers/authenticationController.ts';
import { verifyToken, isAdmin } from '../midlewares/validatorToken';

const router = Router();

router.post('/register', authController.register);  
router.post('/login', authController.login);
router.get('/profile', verifyToken, authController.getProfile);
router.get('/admin', verifyToken, isAdmin, (_req, res) => {
    res.status(200).send("Acces granted to administrator");
});

export default router;
