import { Request, Response } from "express";
import User from "../models/User";
import Ruangan from "../models/Ruangan";
import Kursi from "../models/Kursi";
import adminService from "../services/admin.service";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await adminService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser: User = await adminService.createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await adminService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { name, email, password } = req.body;
    const updatedUser: User | null = await adminService.updateUser(
      userId,
      name,
      email,
      password
    );
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const deletedUser: User | null = await adminService.deleteUser(userId);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRuangan = async (req: Request, res: Response) => {
  try {
    const { name, capacity } = req.body;
    const newRuangan: Ruangan = await adminService.createRuangan(
      name,
      capacity
    );
    res.status(201).json(newRuangan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRuangan = async (req: Request, res: Response) => {
  try {
    const ruangan: Ruangan[] = await adminService.getRuangan();
    res.json(ruangan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRuangan = async (req: Request, res: Response) => {
  try {
    const ruanganId = parseInt(req.params.id, 10);
    const { name, capacity } = req.body;
    const updatedRuangan: Ruangan | null = await adminService.updateRuangan(
      ruanganId,
      name,
      capacity
    );
    if (updatedRuangan) {
      res.json(updatedRuangan);
    } else {
      res.status(404).json({ message: "Ruangan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRuangan = async (req: Request, res: Response) => {
  try {
    const ruanganId = parseInt(req.params.id, 10);
    const deletedRuangan: Ruangan | null = await adminService.deleteRuangan(
      ruanganId
    );
    if (deletedRuangan) {
      res.json(deletedRuangan);
    } else {
      res.status(404).json({ message: "Ruangan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createKursi = async (req: Request, res: Response) => {
  try {
    const { ruanganId, totalKursi } = req.body;
    const newKursi: Kursi[] = await adminService.createKursi(
      ruanganId,
      totalKursi
    );
    res.status(201).json(newKursi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getKursi = async (req: Request, res: Response) => {
  try {
    const kursi: Kursi[] = await adminService.getKursi();
    res.json(kursi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateKursi = async (req: Request, res: Response) => {
  try {
    const kursiId = parseInt(req.params.id, 10);
    const { ruanganId } = req.body;
    const updatedKursi: Kursi | null = await adminService.updateKursi(
      kursiId,
      ruanganId
    );
    if (updatedKursi) {
      res.json(updatedKursi);
    } else {
      res.status(404).json({ message: "Kursi not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteKursi = async (req: Request, res: Response) => {
  try {
    const kursiId = parseInt(req.params.id, 10);
    const deletedKursi: Kursi | null = await adminService.deleteKursi(kursiId);
    if (deletedKursi) {
      res.json(deletedKursi);
    } else {
      res.status(404).json({ message: "Kursi not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  createRuangan,
  getRuangan,
  updateRuangan,
  deleteRuangan,
  createKursi,
  getKursi,
  updateKursi,
  deleteKursi,
};
