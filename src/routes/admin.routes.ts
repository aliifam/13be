import express from "express";
import { AdminController } from "../controllers/admin.controller";
import { authenticateAdmin } from "../middlewares/auth.middleware";

const AdminRouter = express.Router();

const adminController = new AdminController();

AdminRouter.use(authenticateAdmin);

// Get all users
AdminRouter.get("/users", adminController.getAllUsers);

export default AdminRouter;
