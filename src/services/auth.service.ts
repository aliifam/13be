import { UserModel, User } from "../models/user.model";
import { AdminModel, Admin } from "../models/Admin.model";
import { JwtUtils, UserRole } from "../utils/jwt";
import { pool } from "../config";

export class AuthService {
  private userModel: UserModel;
  private adminModel: AdminModel;

  constructor() {
    this.userModel = new UserModel(pool);
    this.adminModel = new AdminModel(pool);
  }

  public async login(
    email: string,
    password: string,
    role: UserRole
  ): Promise<string> {
    let result;

    if (role === UserRole.User) {
      result = await this.userModel.getByEmail(email);
    } else if (role === UserRole.Admin) {
      result = await this.adminModel.getByEmail(email);
    }

    // Check if user/admin exists and password matches
    if (result.rows.length === 0 || result.rows[0].password !== password) {
      throw new Error("Invalid email or password");
    }

    // Generate and return a JWT token
    const id = result.rows[0].id;
    const token = JwtUtils.generateToken(id, role);
    return token;
  }

  // Add other authentication-related operations here
}
