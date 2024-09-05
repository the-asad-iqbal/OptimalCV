import { Router } from "express";
import { createResume, getResume } from "../controller/resumeController.js";

const router = Router();

router.post("/create", createResume);
router.get("/get/:id", getResume);

export default router;
