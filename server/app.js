import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import uploadRoutes from "./src/Routes/uploadRoutes.js";

const app = express();
configDotenv();

app.use(express.json());
app.use(cors());

app.use("/api/v1/upload", uploadRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));
