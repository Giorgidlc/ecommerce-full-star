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
var RoleModel = {
    findAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, roles, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('SELECT * , BIN_TO_UUID(role_id) role_id FROM Roles')];
                    case 2:
                        _a = _b.sent(), roles = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, roles];
                }
            });
        });
    },
    findById: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, role, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query("SELECT * , BIN_TO_UUID(role_id) role_id FROM Roles WHERE role_id = UUID_TO_BIN(\"".concat(id, "\")"))];
                    case 2:
                        _a = _b.sent(), role = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, role];
                }
            });
        });
    },
    create: function (role) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, user_type, _a, newRole, metadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        user_type = role.user_type;
                        return [4 /*yield*/, connection.query("INSERT INTO Roles (user_type) VALUES (?)", [user_type])];
                    case 2:
                        _a = _b.sent(), newRole = _a[0], metadata = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, newRole];
                }
            });
        });
    },
    update: function (role, id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, user_type, _a, updatedRole, metaData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        user_type = role.user_type;
                        return [4 /*yield*/, connection.query('UPDATE Roles SET user_type = ? WHERE role_id = UUID_TO_BIN(?)', [user_type, id])];
                    case 2:
                        _a = _b.sent(), updatedRole = _a[0], metaData = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, updatedRole];
                }
            });
        });
    },
    eliminateById: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, eliminatedRole, metaData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, db_1.openConnectionDb)()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('DELETE FROM Roles WHERE role_id = UUID_TO_BIN(?)', [id])];
                    case 2:
                        _a = _b.sent(), eliminatedRole = _a[0], metaData = _a[1];
                        return [4 /*yield*/, (0, db_1.closeConnectionDb)(connection)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, eliminatedRole];
                }
            });
        });
    },
};
exports.default = RoleModel;
//# sourceMappingURL=roleModel.js.map