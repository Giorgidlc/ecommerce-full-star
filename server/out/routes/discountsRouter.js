"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var discountsController_1 = require("../controllers/discountsController");
var discountsRouter = (0, express_1.Router)();
discountsRouter.get("/", discountsController_1.getDiscounts);
discountsRouter.get("/:id", discountsController_1.getDiscount);
discountsRouter.post("/", discountsController_1.createDiscount);
discountsRouter.put("/:id", discountsController_1.updateDiscount);
discountsRouter.patch("/:id", discountsController_1.updateDiscount);
discountsRouter.delete("/:id", discountsController_1.deleteDiscountById);
exports.default = discountsRouter;
//# sourceMappingURL=discountsRouter.js.map