import { Operations } from './operations';
export class MathOperation {
  public result: number = 0;

  constructor(
    public readonly num1: number,
    public readonly num2: number,
    public readonly operation: Operations
  ) {}
}
