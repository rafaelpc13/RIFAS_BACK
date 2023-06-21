import Numero from "../modelo/Numero.js"
import Precio from "../modelo/Precio.js";
import Ticket from "../modelo/TicketGanador.js";

    const obtenerTicket = async (req, res) => {}
    
    const insertarTicket = async (req, res) => {

      const { precio } = req.body;

      const existeProyecto = await Precio.findById(precio);
     
         try {
            const ticketalmacenado = await Ticket.create(req.body);
            existeProyecto.tickets.push(ticketalmacenado._id);
            await existeProyecto.save();
            res.json(ticketalmacenado)
        } catch (error) {
         console.log(error)   
        }
      //  console.log(req.body)
        res.json(req.body) 
    }

    const actualizarNumero = async (req, res) => {
        
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

    
export {
  obtenerTicket,
    actualizarNumero,
    insertarTicket,
    
}