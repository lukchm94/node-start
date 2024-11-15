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
exports.mathService = mathService;
const operations_1 = require("../models/operations");
function mathService(mathObj) {
    return __awaiter(this, void 0, void 0, function* () {
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
                    throw new Error('Division by zero is not allowed');
                }
                mathObj.result = mathObj.num1 / mathObj.num2;
                break;
            default:
                throw new Error('Unsupported operation');
        }
        console.log(`Result is: ${mathObj.num1} ${mathObj.operation} ${mathObj.num2} = ${mathObj.result}`);
        return mathObj.result;
    });
}
