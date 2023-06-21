import express from "express";
import config from "./config";

const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.set('port', config.port||3000)



export default app