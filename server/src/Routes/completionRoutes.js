import { Router } from "express";
import { createCompletion } from "../controller/completionController.js";

const router = Router();

router.post("/create", createCompletion);

export default router;
