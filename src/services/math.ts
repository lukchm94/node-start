import { Request, Response } from 'express';
import { getParams } from '../controllers/mathOperations';
import { MathOperation } from '../models/math';
import { Operations } from '../models/operations';

/**
 * The function `mathService` performs basic math operations based on the input parameters and returns
 * the result or an error message.
 * @param {Request} req - The `req` parameter in your `mathService` function is of type `Request`,
 * which likely represents the incoming HTTP request object containing information such as headers,
 * parameters, and body data. This parameter is used to extract the necessary data for performing
 * mathematical operations in your function.
 * @param {Response} res - The `res` parameter in the `mathService` function is an object representing
 * the HTTP response that the function will send back to the client. It is of type `Response`, which is
 * typically provided by a web framework like Express.js in Node.js applications. The `res` object has
 * methods like
 */
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
