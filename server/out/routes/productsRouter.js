"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productControllers_1 = require("../controllers/productControllers");
// , createProduct, updateProduct, deleteProduct
var productRouter = (0, express_1.Router)();
productRouter.get('/', productControllers_1.getProducts);
productRouter.get('/:id', productControllers_1.getProduct);
productRouter.post('/', productControllers_1.createProduct);
productRouter.put('/:id', productControllers_1.updateProduct);
productRouter.patch('/:id', productControllers_1.updateProduct);
productRouter.delete('/:id', productControllers_1.deleteProductById);
exports.default = productRouter;
//# sourceMappingURL=productsRouter.js.map