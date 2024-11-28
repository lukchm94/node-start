import { Operations } from './operations';

export class DivisionByZeroError extends Error {
  constructor() {
    super('Division by 0 is not allowed');
    this.name = 'DivisionByZeroError';
  }
}

export class UnsupportedOperationError extends Error {
  constructor(operation: string) {
    super(
      `Unsupported operation provided: ${operation}. Supported operations are: ${Object.values(Operations).join(', ')}`
    );
    this.name = 'UnsupportedOperationError';
  }
}

export class InvalidNumbersError extends Error {
  constructor(num1: number, num2: number) {
    super(
      `Both num1 and num2 needs to be valid numbers. Received num1: ${num1} and num2: ${num2}`
    );
    this.name = 'InvalidNumbersError';
  }
}

export class DefaultServerError extends Error {
  constructor() {
    super('Internal Server Error');
    this.name = 'ServerError';
  }
}
