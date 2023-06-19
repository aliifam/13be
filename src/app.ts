import express from "express";
import dotenv from "dotenv";
import { adminRoutes, bookingRoutes, authRoutes } from "./routes";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/booking", bookingRoutes);
app.use("/auth", authRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
