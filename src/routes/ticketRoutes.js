import express from "express"

import {obtenerTicket,
    actualizarNumero,insertarTicket} from "../controllers/ticketcontroller";

const router = express.Router();


router
.route('/ticket')
.post(insertarTicket)
.get(obtenerTicket)

router.put('/numero/:id',actualizarNumero)



export default router;