import express, { Router } from 'express';

import { Routes } from '../routes';
import healthRouter from '../v2/health';

const v2Router: Router = express.Router();

v2Router.use(Routes.health, healthRouter);

export default v2Router;
