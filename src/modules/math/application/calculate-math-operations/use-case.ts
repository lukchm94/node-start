import { MathOperations } from '../../domain/Math-operation';
import { MathService } from '../../domain/service/math-service';
import { MathOperationsInput } from './input';

export class MathOperationsUseCase {
  constructor(private mathService: MathService) {}

  public async runOperation(
    input: MathOperationsInput
  ): Promise<number | null> {
    try {
      const mathOperations = MathOperations.create({
        num1: input.num1,
        num2: input.num2,
        operation: input.operation,
      });
      const result = await this.mathService.calculate(mathOperations);
      return result;
    } catch (err) {
      throw err;
    }
  }

  public async isEven(input: number): Promise<boolean | null> {
    try {
      const result = await this.mathService.isEven(input);
      return result;
    } catch (err) {
      throw err;
    }
  }
}
