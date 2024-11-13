import { Request } from 'express';
import { MathOperation } from '../models/math';
import { Operations } from '../models/operations';

/**
 * Converts a descriptive operation string to its corresponding operator.
 * @param operation The operation string (e.g., 'add').
 * @returns The corresponding operator (e.g., '+').
 */
const formatAdd = (operation: string): Operations | undefined => {
  console.log(`Operation is: ${operation}`);
  if (operation === 'add' || operation === ' ') {
    return Operations.add;
  } else if (operation === Operations.subtract || operation === 'subtract') {
    return Operations.subtract;
  } else if (operation === Operations.multiply || operation === 'multiply') {
    return Operations.multiply;
  } else if (operation === Operations.divide || operation === 'divide') {
    return Operations.divide;
  } else {
  }
};

/**
 * Extracts and validates parameters from the incoming request.
 * @param req The Express request object.
 * @returns An instance of the MathOperation class.
 * @throws Will throw an error if the method is unsupported or parameters are invalid.
 */
export const getParams = (req: Request): MathOperation => {
  console.log('The method of the request is: ', req.method);

  let num1: number, num2: number, operation: Operations;

  num1 = parseInt(req.query.num1 as string);
  num2 = parseInt(req.query.num2 as string);
  operation = formatAdd(req.query.operation as string) as Operations;

  return new MathOperation(num1, num2, operation);
};
