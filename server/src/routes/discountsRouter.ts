import { Router } from "express";
import {
    getDiscounts,
    getDiscount,
    createDiscount,
    updateDiscount,
    deleteDiscountById,
} from "../controllers/discountsController.ts";

const discountsRouter = Router();

discountsRouter.get("/", getDiscounts);
discountsRouter.get("/:id", getDiscount);
discountsRouter.post("/", createDiscount);
discountsRouter.put("/:id", updateDiscount);
discountsRouter.patch("/:id", updateDiscount);
discountsRouter.delete("/:id", deleteDiscountById);

export default discountsRouter;

