import { Router } from "express";
import { createResume } from "../controller/resumeController.js";

const router = Router();

router.post("/create", createResume);

export default router;
