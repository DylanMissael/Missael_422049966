import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const usuario = db.define(
    "usuarios",
    {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true,
        },
        nombre:{type:Sequelize.STRING},
        apellido:{type:Sequelize.STRING},
        correo:{type:Sequelize.STRING},
        contraseña:{type:Sequelize.STRING},
        telefono:{type:Sequelize.STRING},
        edad:{type:Sequelize.INTEGER},
        direccion:{type:Sequelize.STRING},
    },
    {timestamps:false}
);