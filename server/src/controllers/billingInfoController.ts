import { Request, Response } from 'express';
import BillingInfoModel from '../models/billingInfoModel';

const getBillingInfo = async (_req: Request, res: Response) => {
  try {
    const billingInfo = await BillingInfoModel.findAll();
    if(!billingInfo){return res.status(404).json({message:'Missing Data'})}
    return res.status(200).json(billingInfo);
  } catch (error: any) {

    return res.status(500).json({ message: error.message });
  }
};

const createBillingInfo = async (req: Request, res: Response) => {
  try {

     const { street, user_number, flat, door,zipcode, city ,county, country } = req.body;

        if (!street || !user_number || !flat || !door|| !zipcode|| !city|| !county ||!country) {
            return res.status(400).json({ message: 'Invalid data. All fields are required.'});
        }
        

    const newBillingInfo = req.body;
    const billingInfo = await BillingInfoModel.create(newBillingInfo);
    if(!billingInfo)res.status(400).json({ message: 'Invalid data. Empty Object.'});{}
    return res.status(201).json({ message: 'Billing Info created successfully'});
  } catch (error:any) {
    
    return res.status(500).json({ message: error.message });
  }
};

const updateBillingInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBillingInfo = req.body;
    const billingInfo = await BillingInfoModel.update(updatedBillingInfo, id);
    if (billingInfo) {
      return res.status(200).json({ message: 'Billing Info updated successfully', billingInfo });
    } else {
      return res.status(404).json({ message: 'Billing Info not found' });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBillingInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BillingInfoModel.delete(id);
    if (result) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ message: 'Billing Info not found' });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export { getBillingInfo, createBillingInfo, updateBillingInfo, deleteBillingInfo };
