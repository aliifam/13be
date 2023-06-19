import { UserModel, User } from "../models/User.model";
import { AdminModel, Admin } from "../models/Admin.model";
import { JwtUtils, UserRole } from "../utils/jwt.utils";
import { pool } from "../config/db";
import bcrypt from "bcrypt";

export class AuthService {
  private userModel: UserModel;
  private adminModel: AdminModel;

  constructor() {
    this.userModel = new UserModel(pool);
    this.adminModel = new AdminModel(pool);
  }

  public async loginUser(email: string, password: string): Promise<string> {
    const user = await this.userModel.getUserByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = JwtUtils.generateToken(user.rows[0].id, UserRole.User);
    return token;
  }

  public async loginAdmin(email: string, password: string): Promise<string> {
    const admin = await this.adminModel.getAdminByEmail(email);

    if (!admin) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(
      password,
      admin.rows[0].password
    );

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = JwtUtils.generateToken(admin.rows[0].id, UserRole.Admin);
    return token;
  }

  public async registerUser(
    name: string,
    email: string,
    password: string,
    avatar: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      name,
      email,
      password: hashedPassword,
      avatar,
      role: "User",
    };

    //check if user already exists

    const userExists = await this.userModel.getUserByEmail(email);
    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await this.userModel.createUser(newUser);
    return user.rows[0];
  }

  public async registerAdmin(
    name: string,
    email: string,
    password: string,
    avatar: string
  ): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin: Admin = {
      name,
      email,
      password: hashedPassword,
      avatar,
      role: "Admin",
    };

    //check if admin already exists

    const adminExists = await this.adminModel.getAdminByEmail(email);
    if (adminExists) {
      throw new Error("Admin already exists");
    }

    const admin = await this.adminModel.createAdmin(newAdmin);
    return admin.rows[0];
  }
}
