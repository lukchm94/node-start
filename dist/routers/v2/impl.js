"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
const health_1 = __importDefault(require("../v2/health"));
const v2Router = express_1.default.Router();
v2Router.use(routes_1.Routes.health, health_1.default);
exports.default = v2Router;
