"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var telephonesController_1 = require("../controllers/telephonesController");
var router = express_1.default.Router();
router.get('/telephones', telephonesController_1.getTelephones);
router.post('/telephones', telephonesController_1.createTelephone);
router.get('/telephones/:id', telephonesController_1.getTelephoneById);
router.put('/telephones/:id', telephonesController_1.updateTelephone);
router.delete('/telephones/:id', telephonesController_1.deleteTelephone);
exports.default = router;
//# sourceMappingURL=telephonesRouter.js.map