import express from "express";
import { AuthController } from "../controllers/auth.controller";

const router = express.Router();

const authController = new AuthController();

//login and register admin
router.post("/login/admin", authController.loginAdmin);

//login and register user
router.post("/login/user", authController.loginUser);

export default router;
