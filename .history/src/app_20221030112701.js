import express from "express";

const app = express()

let port=5000;
app.set('port', port||3000)

export default app