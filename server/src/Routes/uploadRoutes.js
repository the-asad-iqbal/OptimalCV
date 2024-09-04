import { Router } from "express";
import multer from "multer";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "/public/uploads");
   },
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix);
   },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/file", upload.single("resume"), (req, res) => {
   console.log(req.file);

   return res.status(200).json({ res: req.file });
});
export default router;
