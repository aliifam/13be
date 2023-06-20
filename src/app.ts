import express from "express";
import { configDotenv } from "dotenv";
import AdminRouter from "./routes/admin.routes";
import cors from "cors";
import cookieParser from "cookie-parser";

configDotenv();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", AdminRouter);
app.use("/api", UserRouter);
app.use("/api", AuthRouter);

//test connection

// app.get("/", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query("SELECT * FROM users");
//     const results = { results: result ? result.rows : null };
//     res.send(results);
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
