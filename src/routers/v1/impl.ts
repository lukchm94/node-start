import express, { Router } from 'express';

import { Routes } from '../routes';
import healthRouter from '../v1/healthCheck';
import mathRouter from '../v1/math';

const v1Router: Router = express.Router();

v1Router.use(Routes.health, healthRouter);
v1Router.use(Routes.math, mathRouter);

export default v1Router;
