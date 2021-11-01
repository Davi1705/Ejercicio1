const express = require('express');
const mongoose = require('mongoose');
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

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});