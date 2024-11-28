import express, { Router } from 'express';

import { Routes } from '../routes';
import healthRouter from '../v2/health';
import mathRouter from '../v2/math';

const v2Router: Router = express.Router();

v2Router.use(Routes.health, healthRouter);
v2Router.use(Routes.math, mathRouter);

export default v2Router;
