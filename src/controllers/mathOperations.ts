import { Request } from 'express';
import { MathOperation } from '../models/math';
import { Operations } from '../models/operations';

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

export const getParams = (req: Request): MathOperation => {
  console.log('The method of the request is: ', req.method);

  const num1: number = parseInt(req.query.num1 as string);
  const num2: number = parseInt(req.query.num2 as string);
  const operation: Operations = formatAdd(
    req.query.operation as string
  ) as Operations;
  return new MathOperation(num1, num2, operation);
};
