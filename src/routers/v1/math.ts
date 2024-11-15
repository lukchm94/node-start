import express, { Request, Response, Router } from 'express';
import { getParams } from '../../controllers/mathOperations';
import { MathOperation } from '../../models/math';
import { mathService } from '../../services/math';
import { Routes } from '../routes';

const router: Router = express.Router();

/**
 * @swagger
 * /v1/math:
 *   get:
 *     summary: Perform a math operation
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
 *             - add
 *             - subtract
 *             - multiply
 *             - divide
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
router.get(Routes.root, async (req: Request, res: Response): Promise<void> => {
  try {
    const mathOperation: MathOperation = await getParams(req);
    const result: number = await mathService(mathOperation);
    res.json(result);
  } catch (err) {
    console.error('Error in math route: ', err);
    res.status(400).json({ error: err });
  }
});

export default router;
