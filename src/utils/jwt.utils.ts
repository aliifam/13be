import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

export enum UserRole {
  User = "user",
  Admin = "admin",
}

export class JwtUtils {
  private static readonly secretKey =
    process.env.JWT_SECRET_KEY || "ini rahasia loh";

  public static generateToken(userId: number, role: UserRole): string {
    const token = jwt.sign({ userId, role }, JwtUtils.secretKey, {
      expiresIn: "1h",
    });
    return token;
  }

  public static verifyToken(token: string): any {
    const decodedToken = jwt.verify(token, JwtUtils.secretKey);
    return decodedToken;
  }
}
