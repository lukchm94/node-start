"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
const router = express_1.default.Router();
router.get(routes_1.Routes.root, (req, res) => {
    console.log(`${req.baseUrl}`);
    res.send(`${routes_1.Version.v2.toUpperCase()}: Service is up and running`);
});
exports.default = router;