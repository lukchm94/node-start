"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
const healthCheck_1 = __importDefault(require("../v1/healthCheck"));
const math_1 = __importDefault(require("../v1/math"));
const v1Router = express_1.default.Router();
v1Router.use(routes_1.Routes.health, healthCheck_1.default);
v1Router.use(routes_1.Routes.math, math_1.default);
exports.default = v1Router;
