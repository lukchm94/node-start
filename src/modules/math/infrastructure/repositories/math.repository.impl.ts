import {
  DivisionByZeroError,
  UnsupportedOperationError,
} from '../../../../models/errors';
import { Operations } from '../../../../models/operations';
import { MathOperations } from '../../domain/Math-operation';
import { MathRepository } from '../../domain/math.repository';

export class MathRepositoryImpl implements MathRepository {
  constructor() {}

  private isEvenNumber = (num: number): boolean => {
    return num % 2 === 0;
  };

  public calculate = async (mathObj: MathOperations): Promise<number> => {
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
  };

  public isEven = async (num: number): Promise<boolean> => {
    const result = this.isEvenNumber(num);
    return result;
  };
}
