import fs from "fs/promises";
import { pdf } from "pdf-to-img";
import path from "path";

const uploadController = async (req, res) => {
   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

   if (req.file.mimetype === "application/pdf") {
      const filePath = req.file.path;
      const document = await pdf(filePath, { scale: 3 });

      let counter = 1;
      const pdfToImages = [];
      for await (const image of document) {
         const outputPath = path.join(
            "./public/uploads",
            `page${counter}-${req.file.originalname}.png`
         );
         await fs.writeFile(outputPath, image);
         pdfToImages.push({
            desctination: "./public/uploads" + `page${counter}-${req.file.originalname}.png`,
            mimetype: "image/png",
            encoding: "base64",
            path: outputPath,
            name: `page${counter}-${req.file.originalname}.png`,
            pdfPath: req.file.path,
         });
         counter++;
      }

      return res.status(200).json(pdfToImages);
   }

   return res.status(200).json([req.file]);
};

export { uploadController };
