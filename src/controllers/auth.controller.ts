import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public loginAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await this.authService.loginAdmin(email, password);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  public loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await this.authService.loginUser(email, password);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  public registerAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password, avatar } = req.body;
      const token = await this.authService.registerAdmin(
        name,
        email,
        password,
        avatar
      );
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
