import express from "express";
import { eliminarUsuario } from "../controllers/eliminarController.js";

const routerEliminar = express.Router();

// Routing gestiona la raiz
routerEliminar.get("/eliminarUsuario", eliminarUsuario);
export default routerEliminar;