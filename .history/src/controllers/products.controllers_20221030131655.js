
import { getConnection } from "../database/connection";

export const getProducts = (req, res) => {

    getConnection().request().query('SELECT *FROM restaurante')
res.json("hoaj")
};