import express from "express";
import { adminController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = express.Router();

router.use(authMiddleware.authenticateAdmin);

router.post("/users", adminController.createUser);
router.get("/users", adminController.getUsers);
router.put("/users/:id", adminController.updateUser);
router.delete("/users/:id", adminController.deleteUser);

router.post("/ruangan", adminController.createRuangan);
router.get("/ruangan", adminController.getRuangan);
router.put("/ruangan/:id", adminController.updateRuangan);
router.delete("/ruangan/:id", adminController.deleteRuangan);

router.post("/kursi", adminController.createKursi);
router.get("/kursi", adminController.getKursi);
router.put("/kursi/:id", adminController.updateKursi);
router.delete("/kursi/:id", adminController.deleteKursi);

router.post("/session", adminController.createSession);
router.get("/session", adminController.getSession);
router.put("/session/:id", adminController.updateSession);
router.delete("/session/:id", adminController.deleteSession);

export default router;
