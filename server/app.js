import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import { connectDb } from "./src/config/db.js";
import uploadRoutes from "./src/Routes/uploadRoutes.js";
import completionRoutes from "./src/Routes/completionRoutes.js";
import resumeRoutes from "./src/Routes/resumeRoutes.js";

const app = express();
configDotenv();

app.use(express.json());
app.use(cors());

app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/completion", completionRoutes);
app.use("/api/v1/resume", resumeRoutes);

app.listen(3000, () => {
   connectDb();
   console.log("[server]: Running => http://localhost:3000");
});
