"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var userRouter = (0, express_1.Router)();
userRouter.get('/', userController_1.getUsers);
userRouter.get('/:id', userController_1.getUser);
userRouter.post('/', userController_1.createUser);
userRouter.put('/:id', userController_1.updateUser);
userRouter.patch('/:id', userController_1.updateUser);
userRouter.delete('/:id', userController_1.deleteUserById);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map