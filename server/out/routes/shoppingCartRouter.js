"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var shoppingCartController_1 = require("../controllers/shoppingCartController");
var shoppingCartRouter = (0, express_1.Router)();
shoppingCartRouter.get('/', shoppingCartController_1.getShoppingCarts);
shoppingCartRouter.get('/:id', shoppingCartController_1.getShoppingCart);
shoppingCartRouter.post('/', shoppingCartController_1.createShoppingCart);
shoppingCartRouter.put('/:id', shoppingCartController_1.updateShoppingCart);
shoppingCartRouter.patch('/:id', shoppingCartController_1.updateShoppingCart);
shoppingCartRouter.delete('/:id', shoppingCartController_1.deleteShoppingCartById);
exports.default = shoppingCartRouter;
//# sourceMappingURL=shoppingCartRouter.js.map