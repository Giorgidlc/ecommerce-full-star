"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.server = void 0;
var express_1 = __importDefault(require("express"));
var productsRouter_1 = __importDefault(require("./routes/productsRouter"));
var userRouter_1 = __importDefault(require("./routes/userRouter"));
var shoppingCartRouter_1 = __importDefault(require("./routes/shoppingCartRouter"));
var payingMethodsRouter_1 = __importDefault(require("./routes/payingMethodsRouter"));
var productTypesRouter_1 = __importDefault(require("./routes/productTypesRouter"));
var discountsRouter_1 = __importDefault(require("./routes/discountsRouter"));
var mediaRouter_1 = __importDefault(require("./routes/mediaRouter"));
var billingInfoRouter_1 = __importDefault(require("./routes/billingInfoRouter"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
exports.app = app;
var port = 0;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/products', productsRouter_1.default);
app.use('/users', userRouter_1.default);
app.use('/shoppingCart', shoppingCartRouter_1.default);
app.use('/billingInfo', billingInfoRouter_1.default);
app.use('/discounts', discountsRouter_1.default);
app.use('/media', mediaRouter_1.default);
app.use('/payingMethods', payingMethodsRouter_1.default);
app.use('/productTypes', productTypesRouter_1.default);
app.get('/', function (_req, res) {
    res.status(200).send('Welcome to the Dreams and Coockies Server!!!');
    res.end();
});
var server = app.listen(port, function () { return console.log("Running on port http://localhost:".concat(port)); });
exports.server = server;
//# sourceMappingURL=index.js.map