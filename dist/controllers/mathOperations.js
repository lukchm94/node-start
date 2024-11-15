"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
const math_1 = require("../models/math");
const operations_1 = require("../models/operations");
const formatAdd = (operation) => {
    console.log(`Operation is: ${operation}`);
    if (operation === 'add' || operation === ' ') {
        return operations_1.Operations.add;
    }
    else if (operation === operations_1.Operations.subtract || operation === 'subtract') {
        return operations_1.Operations.subtract;
    }
    else if (operation === operations_1.Operations.multiply || operation === 'multiply') {
        return operations_1.Operations.multiply;
    }
    else if (operation === operations_1.Operations.divide || operation === 'divide') {
        return operations_1.Operations.divide;
    }
    else {
    }
};
const getParams = (req) => {
    console.log('The method of the request is: ', req.method);
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const operation = formatAdd(req.query.operation);
    return new math_1.MathOperation(num1, num2, operation);
};
exports.getParams = getParams;
