import express from "express";
import { AuthController } from "../controllers/auth.controller";

const authRouter = express.Router();

const authController = new AuthController();

//login and register admin
authRouter.post("/login/admin", authController.loginAdmin);
authRouter.post("/register/admin", authController.registerAdmin);

//login and register user
authRouter.post("/login/user", authController.loginUser);

export default authRouter;
