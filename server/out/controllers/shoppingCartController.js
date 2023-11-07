"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShoppingCartByName = exports.deleteShoppingCartById = exports.updateShoppingCart = exports.createShoppingCart = exports.getShoppingCart = exports.getShoppingCarts = void 0;
var shoppingCartModel_1 = __importDefault(require("../models/shoppingCartModel"));
var getShoppingCarts = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shoppingCarts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, shoppingCartModel_1.default.findAll()];
            case 1:
                shoppingCarts = _a.sent();
                if (!shoppingCarts) {
                    return [2 /*return*/, res.status(404).json({ message: 'Shopping Carts not found' })];
                }
                return [2 /*return*/, res.status(200).json(shoppingCarts)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getShoppingCarts = getShoppingCarts;
var getShoppingCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shoppingCartId, shoppingCart, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                shoppingCartId = req.params.id;
                return [4 /*yield*/, shoppingCartModel_1.default.findById(shoppingCartId)];
            case 1:
                shoppingCart = _a.sent();
                if (!shoppingCart) {
                    return [2 /*return*/, res.status(404).json({ message: 'Shopping Cart not found' })];
                }
                return [2 /*return*/, res.status(200).json(shoppingCart)];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getShoppingCart = getShoppingCart;
var createShoppingCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newShoppingCart, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, shoppingCartModel_1.default.create(req.body)];
            case 1:
                newShoppingCart = _a.sent();
                if (!newShoppingCart) {
                    return [2 /*return*/, res.status(400).json({ message: 'Need to Introduce Body Data' })];
                }
                return [2 /*return*/, res.status(201).json({ message: 'The Shopping Cart has been created succesfully' })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.json({ message: error_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createShoppingCart = createShoppingCart;
var updateShoppingCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shoppingCartId, updatedUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                shoppingCartId = req.params.id;
                return [4 /*yield*/, shoppingCartModel_1.default.update(req.body, shoppingCartId)];
            case 1:
                updatedUser = _a.sent();
                if (!updatedUser) {
                    return [2 /*return*/, res.status(400).json({ message: 'Need to Introduce Body Data' })];
                }
                return [2 /*return*/, res.status(200).json({ message: 'The Shopping Cart has been updated succesfully' })];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.json({ message: error_4.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateShoppingCart = updateShoppingCart;
var deleteShoppingCartById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shoppingCartId, eliminatedShoppingCart, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                shoppingCartId = req.params.id;
                return [4 /*yield*/, shoppingCartModel_1.default.eliminateById(shoppingCartId)];
            case 1:
                eliminatedShoppingCart = _a.sent();
                if (!eliminatedShoppingCart) {
                    return [2 /*return*/, res.status(404).json({ message: 'Shopping Cart Not Found' })];
                }
                return [2 /*return*/, res.json({ message: 'The Shopping Cart has been eliminated succesfully' })];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_5.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteShoppingCartById = deleteShoppingCartById;
var deleteShoppingCartByName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shoppingCartId, eliminatedShoppingCart, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                shoppingCartId = req.params.id;
                return [4 /*yield*/, shoppingCartModel_1.default.eliminateById(shoppingCartId)];
            case 1:
                eliminatedShoppingCart = _a.sent();
                if (!eliminatedShoppingCart) {
                    return [2 /*return*/, res.status(404).json({ message: 'Shopping Cart Not Found' })];
                }
                return [2 /*return*/, res.json({ message: 'The Shopping Cart has been eliminated succesfully' })];
            case 2:
                error_6 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_6.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteShoppingCartByName = deleteShoppingCartByName;
//# sourceMappingURL=shoppingCartController.js.map