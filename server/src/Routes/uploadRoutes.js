import { Router } from "express";
import multer from "multer";
import fs from "fs/promises";
import { pdf } from "pdf-to-img";
import path from "path";
import { log } from "console";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./public/uploads");
   },
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
   },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/file", upload.single("resume"), async (req, res) => {
   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

   if (req.file.mimetype === "application/pdf") {
      console.log(req.file.mimetype);

      const filePath = req.file.path;
      const document = await pdf(filePath, { scale: 3 });

      let counter = 1;
      for await (const image of document) {
         const outputPath = path.join("./public/uploads", `page${counter}.png`);
         await fs.writeFile(outputPath, image);
         counter++;
      }
   }

   return res.status(200).json(req.file);
});

export default router;
