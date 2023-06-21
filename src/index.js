import app from './app'
import express from "express";
import conectarDB from "./database/connection.js";
import cors from "cors";
import precioRouters from "./routes/precioRoutes"
import tareaRouters from "./routes/tareaRoutes.js"
import productsRouters from './routes/products.routes'
import ticketRouters from './routes/ticketRoutes'
import dotenv from 'dotenv';
 
conectarDB();

dotenv.config();




//configuracion de cors
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"));
        }
    },
}; 

app.use(cors());

app.use(precioRouters)
app.use(tareaRouters)
app.use(productsRouters)
app.use(ticketRouters)

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
    console.log(`servidor corriendo desde el puerto ${PORT}`);
})
/////////////////
//conexciones desde socket

import { Server, Socket } from 'socket.io'

const io = new Server(servidor, {
    pingTimeout: 60000,
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    },
});


const cron = require('node-cron');


let eventEmitted = false;

io.on('connection', (socket) => {
    console.log("conectado a socket.io")

    if(!eventEmitted){
        eventEmitted = true;
        function myFunction() {
            console.log('Ejecutando la función a las 7:00 PM');
            socket.emit('eventName');
        }
    cron.schedule('22 11 * * *', myFunction);

    }
   
    
    //definiri eventos
    socket.on('abrir ventana', (proyecto) => {
        socket.join(proyecto)
        //  socket.to("63be0eb2427b49225f017135").emit('respuesta',{nombre:'rafael'})

    });

    socket.on('actualizar', (tarea) => {
        const proyecto = tarea.precio
        socket.to(proyecto).emit('agregada', tarea)
    });

    socket.on('cambiar', (tarea) => {
        console.log(tarea)
        const proyecto = tarea.precio
        socket.to(proyecto).emit('nuevo estado', tarea)
    })
})
export { servidor };
