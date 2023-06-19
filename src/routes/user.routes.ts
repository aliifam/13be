import express from "express";
import { UserController } from "../controllers/user.controller";
import { authenticateUser } from "../middlewares/auth.middleware";

const router = express.Router();

const userController = new UserController();

router.use(authenticateUser);

// Get user by id

export default router;
