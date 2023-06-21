import mongoose from "mongoose";
//import bcrypt from "bcrypt";

const numerosSchema = mongoose.Schema
    ({
        numero: {
            type: String,
            required: true,
            trim: true
        },
        Idtransaccion: {
            type: String,
            required: true,
            trim: true
        },
        celular:{
            type: String,
            required: true,
            trim: true
        },
        valor: {
            type: String,
            required: true,
            trim: true
        },
        usuario:{
            type: String,
            required: true,
            trim: true
        },
        estado:{
            type: String,
            required: true,
            trim: true
        },
        precio:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Precio",
        }

    },{timestamps:true,});

    const Numero = mongoose.model("Numero", numerosSchema);
export default Numero;