import express from "express";
import { UserController } from "../controllers/user.controller";
import { authenticateUser } from "../middlewares/auth.middleware";

const userRouter = express.Router();

const userController = new UserController();

userRouter.use(authenticateUser);

// Get user by id

export default userRouter;
