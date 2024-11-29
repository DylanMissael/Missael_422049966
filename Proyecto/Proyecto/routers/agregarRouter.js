import express from "express";
import { agregarUsuario, crearUsuario } from "../controllers/agregarController.js";

const routerAgregar = express.Router();

// Routing gestiona la raiz
routerAgregar.get("/agregarUsuario", agregarUsuario);
routerAgregar.post("/agregarUsuario", crearUsuario);

export default routerAgregar;