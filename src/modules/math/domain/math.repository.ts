import { MathOperations } from './Math-operation';

export interface MathRepository {
  calculate: (mathOperation: MathOperations) => Promise<number> | null;
  isEven: (num: number) => Promise<boolean>;
}
