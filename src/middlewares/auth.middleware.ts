import { Request, Response, NextFunction } from "express";
import { JwtUtils, UserRole } from "../utils/jwt.utils";

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  // Extract token from request headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token and check for admin role
    const decoded = JwtUtils.verifyToken(token) as { role: string };

    if (decoded.role !== UserRole.Admin) {
      return res.status(403).json({ message: "Admin access only" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  // Extract token from request headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token and check for user role
    const decoded = JwtUtils.verifyToken(token) as { role: string };

    if (decoded.role !== UserRole.User) {
      return res.status(403).json({ message: "User access only" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default { authenticateAdmin, authenticateUser };
