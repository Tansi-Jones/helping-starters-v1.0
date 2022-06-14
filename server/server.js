import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: process.env.HOST_SERVER, // restrict calls to those this address
    credentials: true,
  })
);

app.use("/api/project", postRoutes);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));
