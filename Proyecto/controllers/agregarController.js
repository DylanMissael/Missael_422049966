import { usuario } from "../models/usuario.js";

// mostramos el formulario al usuario
const agregarUsuario = (req, res) => {res.render("add");}

// enviamos los datos a la BD 

const crearUsuario = async(req,res) =>{
    try {
       const {nombre,apellido,correo,contraseña,telefono,edad,direccion} = req.body;
       const nuevoUsuario = await usuario.create({
        nombre,
        apellido,
        correo,
        contraseña,
        telefono,
        edad,
        direccion
       });
       res.redirect("/");
    }catch (error) {
        console.log("Error al agregar un nuevo usuario",error);
        res.status(500).send("Error al agregar un nuevo usuario");
    }
};


export{agregarUsuario,crearUsuario}