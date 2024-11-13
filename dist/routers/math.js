"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const math_1 = require("../services/math");
const router = express_1.default.Router();
router.get('/add', async (req, res) => {
    try {
        await (0, math_1.mathService)(req, res);
        console.log('The body of the request is: ', req.query);
    }
    catch (err) {
        console.error('Error in math route: ', err);
    }
});
router.post('/math', async (req, res) => {
    try {
        await (0, math_1.mathService)(req, res);
        console.log('The body of the request is: ', req.body);
    }
    catch (err) {
        console.error('Error in math route: ', err);
    }
});
exports.default = router;
