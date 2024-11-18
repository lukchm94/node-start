import {
  DivisionByZeroError,
  UnsupportedOperationError,
} from '../models/errors';
import { MathOperation } from '../models/math';
import { Operations } from '../models/operations';

async function mathService(mathObj: MathOperation): Promise<number> {
  switch (mathObj.operation) {
    case Operations.add:
      mathObj.result = mathObj.num1 + mathObj.num2;
      break;
    case Operations.subtract:
      mathObj.result = mathObj.num1 - mathObj.num2;
      break;
    case Operations.multiply:
      mathObj.result = mathObj.num1 * mathObj.num2;
      break;
    case Operations.divide:
      if (mathObj.num2 === 0) {
        throw new DivisionByZeroError();
      }
      mathObj.result = mathObj.num1 / mathObj.num2;
      break;
    default:
      throw new UnsupportedOperationError(mathObj.operation);
  }

  console.log(
    `Result is: ${mathObj.num1} ${mathObj.operation} ${mathObj.num2} = ${mathObj.result}`
  );

  return mathObj.result;
}

export { mathService };
