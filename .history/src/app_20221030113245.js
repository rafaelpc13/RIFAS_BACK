import express from "express";
import config from "./config";

const app = express()

let port;
app.set('port', config.port||3000)

export default app