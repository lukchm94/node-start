"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
const math_1 = require("../models/math");
const operations_1 = require("../models/operations");
/**
 * Converts a descriptive operation string to its corresponding operator.
 * @param operation The operation string (e.g., 'add').
 * @returns The corresponding operator (e.g., '+').
 */
const formatAdd = (operation) => {
    if (operation === 'add' || operation === ' ') {
        return operations_1.Operations.add;
    }
    return operation; // Assuming other operations are already valid.
};
/**
 * Extracts and validates parameters from the incoming request.
 * @param req The Express request object.
 * @returns An instance of the MathOperation class.
 * @throws Will throw an error if the method is unsupported or parameters are invalid.
 */
const getParams = (req) => {
    console.log('The method of the request is: ', req.method);
    let num1, num2, operation;
    if (req.method === 'GET') {
        console.log('Getting numbers from req.query');
        num1 = parseInt(req.query.num1);
        num2 = parseInt(req.query.num2);
        operation = formatAdd(req.query.operation);
    }
    else {
        throw new Error('Unsupported method');
    }
    return new math_1.MathOperation(num1, num2, operation);
};
exports.getParams = getParams;
