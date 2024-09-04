import { Router } from "express";
import { uploadController } from "../controller/uploadController.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = Router();

router.post("/file", upload.single("resume"), uploadController);

export default router;
