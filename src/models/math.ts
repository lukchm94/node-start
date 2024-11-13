import { Operations } from './operations';

export class MathOperation {
  public result: number = 0;

  constructor(
    public readonly num1: number,
    public readonly num2: number,
    public readonly operation: Operations
  ) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        `Both num1 and num2 needs to be valid numbers. Received num1: ${num1} and num2: ${num2}`
      );
    }

    if (!Object.values(Operations).includes(operation)) {
      throw new Error(
        `Invalid operation. Supported operations are: ${Object.values(Operations).join(', ')}`
      );
    }
  }
}
