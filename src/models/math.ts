import { Operations } from "./operations";

export class Math {
  constructor(
    public readonly num1: number,
    public readonly num2: number, 
    public readonly operation: Operations,
    public result: number = 0
  )
}
