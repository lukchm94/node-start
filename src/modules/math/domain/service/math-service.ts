import { MathOperations } from '../Math-operation';
import { MathRepository } from '../math.repository';

export class MathService {
  constructor(private readonly mathRepository: MathRepository) {}

  public async calculate(
    mathOperations: MathOperations
  ): Promise<number | null> {
    const result = await this.mathRepository.calculate(mathOperations);
    return result;
  }

  public async isEven(num: number): Promise<boolean> {
    const result = await this.mathRepository.isEven(num);
    return result;
  }
}
