"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var payingMethodsController_1 = require("../controllers/payingMethodsController");
var payingMethodsRouter = (0, express_1.Router)();
payingMethodsRouter.get('/', payingMethodsController_1.getPayingMethods);
payingMethodsRouter.post('/', payingMethodsController_1.createPayingMethod);
payingMethodsRouter.delete('/:id', payingMethodsController_1.deletePayingMethod);
exports.default = payingMethodsRouter;
//# sourceMappingURL=payingMethodsRouter.js.map