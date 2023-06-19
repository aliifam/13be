import { Request, Response } from "express";
import { bookingService } from "../services";

const bookRuangan = async (req: Request, res: Response) => {
  try {
    const { userId, ruanganId } = req.body;
    const bookedRuangan = await bookingService.bookRuangan(userId, ruanganId);
    res.json(bookedRuangan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const bookKursi = async (req: Request, res: Response) => {
  try {
    const { userId, kursiId } = req.body;
    const bookedKursi = await bookingService.bookKursi(userId, kursiId);
    res.json(bookedKursi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const confirmPresence = async (req: Request, res: Response) => {
  try {
    const { userId, sessionId } = req.body;
    const confirmedPresence = await bookingService.confirmPresence(
      userId,
      sessionId
    );
    res.json(confirmedPresence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  bookRuangan,
  bookKursi,
  confirmPresence,
};
