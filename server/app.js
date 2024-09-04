import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import uploadRoutes from "./src/Routes/uploadRoutes.js";
import completionRoutes from "./src/Routes/completionRoutes.js";

const app = express();
configDotenv();

app.use(express.json());
app.use(cors());

app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/completion", completionRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));
