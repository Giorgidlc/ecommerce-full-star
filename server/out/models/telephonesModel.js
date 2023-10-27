"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var TelephonesModel = {
    findAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, phones, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('SELECT * , BIN_TO_UUID(phone_id) phone_id, BIN_TO_UUID(user_id) user_id FROM Telephones')];
                    case 2:
                        _a = _b.sent(), phones = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, phones];
                }
            });
        });
    },
    findById: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, phone, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('SELECT * , BIN_TO_UUID(phone_id) phone_id, BIN_TO_UUID(user_id) user_id FROM Telephones WHERE phone_id = UUID_TO_BIN(?)', [id])];
                    case 2:
                        _a = _b.sent(), phone = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, phone[0] || null];
                }
            });
        });
    },
    create: function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, phoneNumber, user_id, _a, newPhone, metadata, insertedPhone, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        phoneNumber = phone.phone, user_id = phone.user_id;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, connection.query('INSERT INTO Telephones (phone, user_id) VALUES (?, UUID_TO_BIN(?))', [phoneNumber, user_id])];
                    case 3:
                        _a = _b.sent(), newPhone = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 4:
                        _b.sent();
                        if (Array.isArray(newPhone) && newPhone.length > 0) {
                            insertedPhone = newPhone[0];
                            if (insertedPhone && 'insertId' in insertedPhone) {
                                return [2 /*return*/, __assign(__assign({}, phone), { phone_id: String(insertedPhone.insertId) })];
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.error('Error in create phone:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, null];
                }
            });
        });
    },
    update: function (phone, id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, phoneNumber, user_id, _a, updatedPhone, metadata, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        phoneNumber = phone.phone, user_id = phone.user_id;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, connection.query('UPDATE Telephones SET phone = ?, user_id = UUID_TO_BIN(?) WHERE phone_id = UUID_TO_BIN(?)', [phoneNumber, user_id, id])];
                    case 3:
                        _a = _b.sent(), updatedPhone = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 4:
                        _b.sent();
                        if (Array.isArray(updatedPhone) && updatedPhone.length > 0) {
                            return [2 /*return*/, phone];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _b.sent();
                        console.error('Error in update phone:', error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, null];
                }
            });
        });
    },
    delete: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, deletedPhone, metadata, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, connection.query('DELETE FROM Telephones WHERE phone_id = UUID_TO_BIN(?)', [id])];
                    case 3:
                        _a = _b.sent(), deletedPhone = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, Array.isArray(deletedPhone) && deletedPhone.length > 0];
                    case 5:
                        error_3 = _b.sent();
                        console.error('Error in delete phone:', error_3);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = TelephonesModel;
//# sourceMappingURL=telephonesModel.js.map