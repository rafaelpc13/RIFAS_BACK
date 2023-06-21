import express from "express";
import config from "./config";
import productsRouters from './routes/products.routes'

const app = express()

let port;
app.set('port', config.port||3000)
app.use(productsRouters)

export default app