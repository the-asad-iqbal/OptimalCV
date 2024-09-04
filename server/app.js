import express from "express";
import cors from "cors";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function fileToGenerativePart(path, mimeType) {
   return {
      inlineData: {
         data: Buffer.from(fs.readFileSync(path)).toString("base64"),
         mimeType,
      },
   };
}

const prompt =
   "system: you are a dum machine that return response in json object only. prompt: Explain this image.";

const imagePart = fileToGenerativePart(`./public/jetpack.jpg`, "image/jpeg");

const result = await model.generateContent([prompt, imagePart]);
console.log(result.response.text());

app.listen(3000, () => console.log("Server started on port 3000"));
