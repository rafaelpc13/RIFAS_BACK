
import { getConnection } from "../database/connection";

export const getProducts = async (req, res) => {

   const result = await getConnection().request().query('SELECT *FROM restaurante')
   console.log(result)

};