import express, { Request, Response, Router } from 'express';
import { mathService } from '../services/math';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    await mathService(req, res);
  } catch (err) {
    console.error('Error in math route: ', err);
  }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    await mathService(req, res);
  } catch (err) {
    console.error('Error in math route: ', err);
  }
});

export default router;
