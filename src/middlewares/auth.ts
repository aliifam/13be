// src/middleware/authMiddleware.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
      req.body.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
};

const authorizeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = req.body.user;
  if (user && user.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
};

export { authenticateUser, authorizeAdmin };
