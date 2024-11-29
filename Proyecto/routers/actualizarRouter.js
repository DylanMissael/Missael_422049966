import express from "express";
import {actualizar} from "../controllers/actualizarController.js";

const routerUpdate = express.Router();

// Routing gestiona la raiz
routerUpdate.get("/actualizarUsuario", actualizar);

export default routerUpdate;