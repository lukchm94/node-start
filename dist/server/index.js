"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheck_1 = __importDefault(require("../routers/healthCheck"));
const math_1 = __importDefault(require("../routers/math"));
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000');
const version = '/v1';
app.use(express_1.default.json());
app.use(version + '/health', healthCheck_1.default);
app.use(version + '/math', math_1.default);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
