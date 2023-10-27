"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRolesController_1 = require("../controllers/userRolesController");
var userRolesRouter = (0, express_1.Router)();
userRolesRouter.get('/', userRolesController_1.getUserRoles);
userRolesRouter.post('/', userRolesController_1.createUserRole);
userRolesRouter.delete('/', userRolesController_1.deleteUserRole);
exports.default = userRolesRouter;
//# sourceMappingURL=userRolesRouter.js.map