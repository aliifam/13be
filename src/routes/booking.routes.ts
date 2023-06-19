import express from "express";
import { bookingController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = express.Router();

router.use(authMiddleware.authenticateUser);

router.post("/ruangan", bookingController.bookRuangan);
router.post("/kursi", bookingController.bookKursi);
router.post("/presence", bookingController.confirmPresence);

export default router;
