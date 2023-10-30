import express from 'express';
import * as billingInfoController from '../controllers/billingInfoController';

const router = express.Router();

router.get('/', billingInfoController.getBillingInfo);
router.post('/', billingInfoController.createBillingInfo);
router.put('/:id', billingInfoController.updateBillingInfo);
router.delete('/:id', billingInfoController.deleteBillingInfo);

export default router;
