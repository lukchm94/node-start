"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOperation = void 0;
const operations_1 = require("./operations");
class MathOperation {
    constructor(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
        this.result = 0;
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error(`Both num1 and num2 needs to be valid numbers. Received num1: ${num1} and num2: ${num2}`);
        }
        if (!Object.values(operations_1.Operations).includes(operation)) {
            throw new Error(`Invalid operation. Supported operations are: ${Object.values(operations_1.Operations).join(', ')}`);
        }
    }
}
exports.MathOperation = MathOperation;
