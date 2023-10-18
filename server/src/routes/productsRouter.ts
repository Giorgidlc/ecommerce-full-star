import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProduct);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.patch("/:id", uptadeProduct);
productsRouter.delete("/:id", deleteProduct);

export default productsRouter;

