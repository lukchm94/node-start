"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routers/routes");
const impl_1 = __importDefault(require("../routers/v1/impl"));
const impl_2 = __importDefault(require("../routers/v2/impl"));
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000');
app.use(express_1.default.json());
app.use(routes_1.Version.v1, impl_1.default);
app.use(routes_1.Version.v2, impl_2.default);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
