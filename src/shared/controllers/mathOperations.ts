import { Request } from 'express';
// import { MathOperationsInput } from '../../modules/math/application/calculate-math-operations/input';
import { MathOperationsInput } from '../../modules/math/application/calculate-math-operations/input';

import {
  InvalidNumbersError,
  UnsupportedOperationError,
} from '../models/errors';
import { MathOperation } from '../models/math';
import { Operations } from '../models/operations';

// TODO convert the functions to proper controllers class
const formatAdd = (operation: string): Operations | undefined => {
  if (operation === 'add' || operation === ' ') {
    return Operations.add;
  } else if (operation === Operations.subtract || operation === 'subtract') {
    return Operations.subtract;
  } else if (operation === Operations.multiply || operation === 'multiply') {
    return Operations.multiply;
  } else if (operation === Operations.divide || operation === 'divide') {
    return Operations.divide;
  } else {
    throw new UnsupportedOperationError(operation);
  }
};

const formatOperation = (operation: string): string => {
  if (operation === 'add' || operation === ' ') {
    return Operations.add;
  } else if (operation === Operations.subtract || operation === 'subtract') {
    return Operations.subtract;
  } else if (operation === Operations.multiply || operation === 'multiply') {
    return Operations.multiply;
  } else if (operation === Operations.divide || operation === 'divide') {
    return Operations.divide;
  } else {
    throw new UnsupportedOperationError(operation);
  }
};

export const getParams = (req: Request): MathOperation => {
  const num1: number = parseInt(req.query.num1 as string);
  const num2: number = parseInt(req.query.num2 as string);
  if (isNaN(num1) || isNaN(num2)) {
    throw new InvalidNumbersError(num1, num2);
  }
  const operation: Operations = formatAdd(
    req.query.operation as string
  ) as Operations;
  return new MathOperation(num1, num2, operation);
};

export const v2GetParams = (req: Request): MathOperationsInput => {
  const num1: number = parseInt(req.query.num1 as string);
  const num2: number = parseInt(req.query.num2 as string);
  if (isNaN(num1) || isNaN(num2)) {
    throw new InvalidNumbersError(num1, num2);
  }
  const operation: string = formatOperation(req.query.operation as string);

  const mathInput: MathOperationsInput = {
    num1: num1,
    num2: num2,
    operation: operation,
  };
  return mathInput;
};

export const validateNum = (req: Request): number => {
  const num: number = parseInt(req.query.num as string);
  if (isNaN(num)) {
    throw new Error('Not a valid number');
  }
  return num;
};
