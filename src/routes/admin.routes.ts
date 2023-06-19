import express from "express";
import { AdminController } from "../controllers/admin.controller";
import { authenticateAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

const adminController = new AdminController();

router.use(authenticateAdmin);

// Get all users
router.get("/users", adminController.getAllUsers);

export default router;
