import { Request, Response } from 'express';
import { getParams } from '../controllers/mathOperations';
import { MathOperation } from '../models/math';
import { Operations } from '../models/operations';

const mathService = async (req: Request, res: Response): Promise<void> => {
  try {
    const mathObj: MathOperation = getParams(req);

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
          res.status(400).json({ error: 'Division by zero is not allowed' });
        }
        mathObj.result = mathObj.num1 / mathObj.num2;
        break;
      default:
        throw new Error('Unsupported operation');
    }

    console.log(
      `Result is: ${mathObj.num1} ${mathObj.operation} ${mathObj.num2} = ${mathObj.result}`
    );

    res.status(200).json({ result: mathObj.result });
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: `Server error: ${err}` });
    }
  }
};

export { mathService };
