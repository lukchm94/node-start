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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathService = void 0;
const mathOperations_1 = require("../controllers/mathOperations");
const operations_1 = require("../models/operations");
const mathService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mathObj = (0, mathOperations_1.getParams)(req);
        switch (mathObj.operation) {
            case operations_1.Operations.add:
                mathObj.result = mathObj.num1 + mathObj.num2;
                break;
            case operations_1.Operations.subtract:
                mathObj.result = mathObj.num1 - mathObj.num2;
                break;
            case operations_1.Operations.multiply:
                mathObj.result = mathObj.num1 * mathObj.num2;
                break;
            case operations_1.Operations.divide:
                if (mathObj.num2 === 0) {
                    res.status(400).json({ error: 'Division by zero is not allowed' });
                }
                mathObj.result = mathObj.num1 / mathObj.num2;
                break;
            default:
                throw new Error('Unsupported operation');
        }
        console.log(`Result is: ${mathObj.num1} ${mathObj.operation} ${mathObj.num2} = ${mathObj.result}`);
        res.status(200).json({ result: mathObj.result });
    }
    catch (err) {
        console.log(err);
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(400).json({ error: `Server error: ${err}` });
        }
    }
});
exports.mathService = mathService;
