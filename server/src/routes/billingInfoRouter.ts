import express from 'express';
import * as billingInfoController from '../controllers/billingInfoController';

const router = express.Router();

router.get('/billingInfo', billingInfoController.getBillingInfo);
router.post('/billingInfo', billingInfoController.createBillingInfo);
router.put('/billingInfo/:id', billingInfoController.updateBillingInfo);
router.delete('/billingInfo/:id', billingInfoController.deleteBillingInfo);

export default router;
