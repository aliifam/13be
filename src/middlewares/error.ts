import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

export default errorMiddleware;
