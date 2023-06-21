
import { getConnection } from "../database/connection";

export const getProducts = async (req, res) => {

   const pool = await getConnection();
   const result = pool.request().query('SELECT * FROM restaurante');
   console.log(result)

};