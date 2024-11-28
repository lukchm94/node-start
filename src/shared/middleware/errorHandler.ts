import { NextFunction, Request, Response } from 'express';
import {
  DivisionByZeroError,
  InvalidNumbersError,
  UnsupportedOperationError,
} from '../models/errors';

const errResp = (err: Error) => {
  return { err: err.name, message: err.message };
};

const logError = (req: Request): void => {
  if (req.method === 'GET') {
    console.error(`Incorrect request query: ${JSON.stringify(req.query)}`);
  } else if (req.method === 'POST') {
    console.error(`Incorrect request body: ${JSON.stringify(req.body)}`);
  } else {
    console.error(`Error when processing: ${JSON.stringify(req.url)}`);
  }
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logError(req);
  if (err instanceof InvalidNumbersError) {
    res.status(422).json(errResp(err));
  } else if (
    err instanceof DivisionByZeroError ||
    err instanceof UnsupportedOperationError
  ) {
    res.status(400).json(errResp(err));
  } else {
    res.status(500).json(errResp(err));
  }
  console.log(`Now executing action: ${next.name}`);
};
