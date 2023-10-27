"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var roleController_1 = require("../controllers/roleController");
var roleRouter = (0, express_1.Router)();
roleRouter.get('/', roleController_1.getRoles);
roleRouter.get('/:id', roleController_1.getRole);
roleRouter.post('/', roleController_1.createRole);
roleRouter.put('/:id', roleController_1.updateRole);
roleRouter.patch('/:id', roleController_1.updateRole);
roleRouter.delete('/:id', roleController_1.deleteRoleById);
exports.default = roleRouter;
//# sourceMappingURL=roleRouter.js.map