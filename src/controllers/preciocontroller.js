
import Numero from "../modelo/Numero.js";
import Precio from "../modelo/Precio.js";

const nuevoModo = async (req, res) => {
    const precio = new Precio(req.body)

    try {
        const precioalmacenado = await precio.save()
        res.json(precioalmacenado);
    } catch (error) {
        console.log(error)
    }
}

const obtenerModos = async (req, res) => {
    const modalidades = await Precio.find({});
   console.log(modalidades)
    res.json(modalidades);
};


const obtenerModo = async (req, res) => {
    console.log("entro")
    const { id } = req.params;
    console.log(id)
    const precio = await Precio.findById(id).populate('numeros')
   // console.log(precio)

    res.json(precio)
    //console.log({precio,numeros})
};


export {
    obtenerModos,
    obtenerModo,
    nuevoModo
}