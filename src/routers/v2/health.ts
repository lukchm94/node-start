import express, { Request, Response, Router } from 'express';
import { Routes, Version } from '../routes';

const router: Router = express.Router();

router.get(Routes.root, (req: Request, res: Response) => {
  console.log(`${req.baseUrl}`);
  res.send(`${Version.v2.toUpperCase()}: Service is up and running`);
});

export default router;
