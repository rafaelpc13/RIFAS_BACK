import Numero from "../modelo/Numero.js"
import Precio from "../modelo/Precio.js";

    const obtenerNumeros = async (req, res) => {}
    
    const agregarNumeros = async (req, res) => {

      const { precio } = req.body;

      const existeProyecto = await Precio.findById(precio);
     
         try {
            const numeroalmacenado = await Numero.create(req.body);

            existeProyecto.numeros.push(numeroalmacenado._id);
            await existeProyecto.save();
            res.json(numeroalmacenado)
        } catch (error) {
         console.log(error)   
        }
      //  console.log(req.body)
        res.json(req.body) 
    }

    const actualizarNumero = async (req, res) => {
    console.log(req.body)
        
    const { id } = req.params;

    const numero = await Numero.findById(id);
    //console.log(numero)

    numero.numero = req.body.numero   || numero.numero;
    numero.usuario = req.body.usuario || numero.usuario;
    numero.celular = req.body.celular || numero.celular;
    numero.valor = req.body.valor     || numero.valor;
    numero.estado = req.body.estado   || numero.estado;
  
    try {
      const numeroAlmacenada = await numero.save();
      // console.log(tareaAlmacenada)
      res.json(numeroAlmacenada)
    } catch (error) {
      console.log(error)
    }

    }

    const cambiarestado = async (req, res) => {
      const { id } = req.params;
      console.log`entrooo------> ${id}`
      const tarea = await Numero.findById(id);   
      tarea.estado = true;   
      await tarea.save();
        res.json(tarea)
    }

    const obtenerUsuarioGanador = async (req,res)=>{
      const {num}= req.params;
      console.log(num)
      const numeo = await Numero.findOne({numero:num});
      // console.log(numeo.usuario)
       res.json(numeo);
    }

    
export {
    obtenerNumeros,
    actualizarNumero,
    agregarNumeros,
    cambiarestado,
    obtenerUsuarioGanador
}