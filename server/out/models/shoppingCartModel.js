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
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../config/db");
var ShoppingCartModel = {
    findAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, shoppingCarts, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('SELECT * , BIN_TO_UUID(shoppingCart_id) shoppingCart_id FROM ShoppingCarts')];
                    case 2:
                        _a = _b.sent(), shoppingCarts = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent(); //Cerrar la conexión en cada petición, podría ser ineficiente. Investigar como y donde hacerlo.
                        return [2 /*return*/, shoppingCarts];
                }
            });
        });
    },
    findById: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, shoppingCart, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query("SELECT * , BIN_TO_UUID(shoppingCart_id) shoppingCart_id FROM ShoppingCarts WHERE shoppingCart_id = UUID_TO_BIN(\"".concat(id, "\")"))];
                    case 2:
                        _a = _b.sent(), shoppingCart = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, shoppingCart];
                }
            });
        });
    },
    create: function (shoppingCart) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, shopping_cart_id, user_id, paying_method_id, total, _a, newShoppingCart, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        shopping_cart_id = shoppingCart.shopping_cart_id, user_id = shoppingCart.user_id, paying_method_id = shoppingCart.paying_method_id, total = shoppingCart.total;
                        return [4 /*yield*/, connection.query("INSERT INTO Shopping_Carts (shopping_cart_id, user_id, paying_method_id, total) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?)", [shopping_cart_id, user_id, paying_method_id, total])];
                    case 2:
                        _a = _b.sent(), newShoppingCart = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, newShoppingCart];
                }
            });
        });
    },
    update: function (shoppingCart, id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, shopping_cart_id, user_id, paying_method_id, total, isValidData, _a, newShoppingCart, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        shopping_cart_id = shoppingCart.shopping_cart_id, user_id = shoppingCart.user_id, paying_method_id = shoppingCart.paying_method_id, total = shoppingCart.total;
                        isValidData = user_id && paying_method_id !== null && total !== null;
                        // Lanzar una excepción si los datos no son válidos
                        if (!isValidData) {
                            throw new Error("Valores inválidos para user_id, paying_method_id o total.");
                        }
                        return [4 /*yield*/, connection.query("INSERT INTO Shopping_Carts (shopping_cart_id, user_id, paying_method_id, total) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?)", [shopping_cart_id, user_id, paying_method_id, total])];
                    case 2:
                        _a = _b.sent(), newShoppingCart = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, newShoppingCart];
                }
            });
        });
    },
    eliminateById: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, eliminatedShoppingCart, metaData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('DELETE FROM ShoppingCarts WHERE shoppingCart_id = UUID_TO_BIN(?)', [id])];
                    case 2:
                        _a = _b.sent(), eliminatedShoppingCart = _a[0], metaData = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, eliminatedShoppingCart];
                }
            });
        });
    },
    eliminateByName: function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, eliminatedShoppingCarts, metaData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('DELETE FROM ShoppingCarts WHERE user_id = UUID_TO_BIN(?)', [name])];
                    case 2:
                        _a = _b.sent(), eliminatedShoppingCarts = _a[0], metaData = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, eliminatedShoppingCarts];
                }
            });
        });
    }
};
exports.default = ShoppingCartModel;
//# sourceMappingURL=shoppingCartModel.js.map