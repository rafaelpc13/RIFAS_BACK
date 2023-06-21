import mongoose from "mongoose";
//import bcrypt from "bcrypt";

const preciosSchema = mongoose.Schema
    ({
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true
        },      
        numeros:[{
            type: mongoose.Schema.Types.ObjectId,
           ref:"Numero",
        }],
        tickets:[{
            type: mongoose.Schema.Types.ObjectId,
           ref:"Ticket",
        }],
      
    },{timestamps:true,});

    const Precio = mongoose.model("Precio", preciosSchema);
export default Precio;