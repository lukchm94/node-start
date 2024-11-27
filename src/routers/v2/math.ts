import express, { NextFunction, Request, Response, Router } from 'express';
import { v2GetParams, validateNum } from '../../controllers/mathOperations';
import { MathOperationsInput } from '../../modules/math/application/calculate-math-operations/input';
import { MathOperationsUseCase } from '../../modules/math/application/calculate-math-operations/use-case';
import { MathService } from '../../modules/math/domain/service/math-service';
import { MathRepositoryImpl } from '../../modules/math/infrastructure/repositories/math.repository.impl';
import { Routes } from '../routes';

const router: Router = express.Router();
const mathRepository = new MathRepositoryImpl();
const mathService = new MathService(mathRepository);
const mathUseCase = new MathOperationsUseCase(mathService);

/**
 * @swagger
 * /v2/math:
 *   get:
 *     summary: Perform a math operation (Using Modules DDD architecture)
 *     description: Perform an arithmetic operation (addition, subtraction, etc.) on two numbers.
 *     parameters:
 *       - name: num1
 *         in: query
 *         description: The first number for the operation
 *         required: true
 *         schema:
 *           type: integer
 *       - name: num2
 *         in: query
 *         description: The second number for the operation
 *         required: true
 *         schema:
 *           type: integer
 *       - name: operation
 *         in: query
 *         description: The operation to perform (add, subtract, multiply, divide)
 *         required: true
 *         schema:
 *           type: string
 *           enum:
 *             - 'add'
 *             - '-'
 *             - '*'
 *             - '/'
 *     responses:
 *       200:
 *         description: The result of the math operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Invalid input or operation
 */
router.get(
  Routes.root,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const input: MathOperationsInput = v2GetParams(req);
      const result: number | null = await mathUseCase.runOperation(input);
      res.json({ result: result });
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  Routes.isEven,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const input: number = validateNum(req);
      const result: boolean | null = await mathUseCase.isEven(input);
      res.json({ result: `Number ${input} is even: ${result}` });
    } catch (err) {
      next(err);
    }
  }
);
export default router;
