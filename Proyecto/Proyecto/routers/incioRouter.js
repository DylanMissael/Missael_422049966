import express from "express";
import { inicio } from "../controllers/inicioController.js";

const router = express.Router();

// Routing gestiona la raiz
router.get("/", inicio);

export default router;