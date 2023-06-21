
const express =require("express")


const {obtenerModo,
    obtenerModos, 
    nuevoModo} = require ("../controllers/preciocontroller.js");

const router = express.Router();

router
.route('/')
.get(obtenerModos)
.post(nuevoModo)

router.get('/precio/:id',obtenerModo)


module.exports= router;