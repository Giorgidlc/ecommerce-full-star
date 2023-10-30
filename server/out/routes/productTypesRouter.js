"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productTypesController_1 = require("../controllers/productTypesController");
var productTypesRouter = (0, express_1.Router)();
productTypesRouter.get('/', productTypesController_1.getProductTypes);
productTypesRouter.get('/:id', productTypesController_1.getProductType);
productTypesRouter.post('/', productTypesController_1.createProductType);
productTypesRouter.put('/:id', productTypesController_1.updateProductType);
productTypesRouter.put('/:id', productTypesController_1.updateProductType);
productTypesRouter.delete('/:id', productTypesController_1.deleteProductTypeById);
exports.default = productTypesRouter;
//# sourceMappingURL=productTypesRouter.js.map