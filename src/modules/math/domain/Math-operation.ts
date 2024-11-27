import { UnsupportedOperationError } from '../../../models/errors';
import { Operations } from '../../../models/operations';
export type OperationType =
  | Operations.add
  | Operations.divide
  | Operations.multiply
  | Operations.subtract;

export class MathOperations {
  public result: number = 0;

  constructor(
    public readonly num1: number,
    public readonly num2: number,
    public readonly operation: OperationType
  ) {}

  public static OPERATION_TYPE: OperationType[] = [
    Operations.add,
    Operations.divide,
    Operations.multiply,
    Operations.subtract,
  ];

  private static validateOperationType(operation: string) {
    if (!MathOperations.OPERATION_TYPE.includes(operation as OperationType)) {
      throw new UnsupportedOperationError(operation);
    }
    return operation as OperationType;
  }

  public static create(params: {
    num1: number;
    num2: number;
    operation: string;
  }): MathOperations {
    const operation = this.validateOperationType(params.operation);

    return new MathOperations(params.num1, params.num2, operation);
  }
}
