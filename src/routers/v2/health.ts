import express, { NextFunction, Request, Response, Router } from 'express';
import { Routes, Version } from '../routes';

const router: Router = express.Router();

router.get(Routes.root, (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`${req.baseUrl}`);
    res.send(`${Version.v2.toUpperCase()}: Service is up and running`);
  } catch (err) {
    next(err);
  }
});

export default router;
