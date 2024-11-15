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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mathOperations_1 = require("../../controllers/mathOperations");
const math_1 = require("../../services/math");
const routes_1 = require("../routes");
const router = express_1.default.Router();
/**
 * @swagger
 * /v1/math:
 *   get:
 *     summary: Perform a math operation
 *     description: Perform an arithmetic operation (addition, subtraction, etc.) on two numbers.
 *     parameters:
 *       - name: num1
 *         in: query
 *         description: The first number for the operation
 *         required: true
 *         schema:
 *           type: integer
 *       - name: num2
 *         in: query
 *         description: The second number for the operation
 *         required: true
 *         schema:
 *           type: integer
 *       - name: operation
 *         in: query
 *         description: The operation to perform (add, subtract, multiply, divide)
 *         required: true
 *         schema:
 *           type: string
 *           enum:
 *             - add
 *             - subtract
 *             - multiply
 *             - divide
 *     responses:
 *       200:
 *         description: The result of the math operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Invalid input or operation
 */
router.get(routes_1.Routes.root, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mathOperation = yield (0, mathOperations_1.getParams)(req);
        const result = yield (0, math_1.mathService)(mathOperation);
        res.json(result);
    }
    catch (err) {
        console.error('Error in math route: ', err);
        res.status(400).json({ error: err });
    }
}));
exports.default = router;
