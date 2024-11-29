
import express from 'express';
import bodyParser from 'body-parser';
import db from "./config/db.js";

import router from './routers/incioRouter.js';
import routerUpdate from './routers/actualizarRouter.js';
import routerAgregar from './routers/agregarRouter.js';
import routerEliminar from './routers/eliminarRouter.js';

const app = express();

// Configuración para el uso de peticiones POST

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'))

// Plantillas que sean dinámicas y mostramos las paginas

    app.set('view engine', 'ejs');
    app.set("views", "./views");

// Configuramos las rutas  para acceder a las plantillas
    app.use("/",router);
    app.use("/agregar",routerAgregar);
    app.use("/eliminar",routerEliminar);
    app.use("/actualizar",routerUpdate);

// Comrpobamos la conexion a la BD
    try {
        const conexion = await db;
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }

// Iniciamos el servidor

    const port = 2800;
    app.listen(port, () => {
        console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
    });

