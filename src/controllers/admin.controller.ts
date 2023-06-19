import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";

export class AdminController {
  private adminService: AdminService;

  constructor() {
    this.adminService = new AdminService();
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.adminService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
