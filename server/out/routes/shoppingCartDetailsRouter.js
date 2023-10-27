"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var shoppingCartDetailsController_1 = require("../controllers/shoppingCartDetailsController");
var shoppingCartRouter = (0, express_1.Router)();
shoppingCartRouter.get('/', shoppingCartDetailsController_1.getShoppingCartsDetails);
shoppingCartRouter.get('/:id', shoppingCartDetailsController_1.getShoppingCartDetail);
shoppingCartRouter.post('/', shoppingCartDetailsController_1.createShoppingCartDetail);
shoppingCartRouter.put('/:id', shoppingCartDetailsController_1.updateShoppingCartDetail);
shoppingCartRouter.patch('/:id', shoppingCartDetailsController_1.updateShoppingCartDetail);
shoppingCartRouter.delete('/:id', shoppingCartDetailsController_1.deleteShoppingCartDetailById);
exports.default = shoppingCartRouter;
//# sourceMappingURL=shoppingCartDetailsRouter.js.map