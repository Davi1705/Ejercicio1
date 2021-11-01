const express = require('express');
const mongoose = require('mongoose');
const UsuarioSchema = require('./Modelos/Usuario.js');

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//conexion base de datos

mongoose.connect("mongodb+srv://dbDavidmintic:gomar2013@clusterc4g41.7i8el.mongodb.net/Ej1Ciclo4?retryWrites=true&w=majority")

// Operaciones CRUD
router.get("/",(req, res) => {
    res.send("Este es el inicio de mi primera API")
});

// Consultar todos
router.get("/Usuario", (req, res) => {
    UsuarioSchema.find(function (err, datos){
        if (err){
            console.log("Error leyendo los usuarios");
        }else {
            res.send(datos);
        }
    })
})

// Insertar

router.post("/Usuario",(req, res) => {
    let nuevoUsuario = new UsuarioSchema ({

        idUsuario: req.body.id,
        nombreUsuario: req.body.nombre,
        telefonoUsuario: req.body.telefono,
        ciudadUsuario: req.body.ciudad

    });
    nuevoUsuario.save(function (err, datos) {
        if (err) {
            console.log(err);
        }
        res.send("Usuario almacenado")
    })
})

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});