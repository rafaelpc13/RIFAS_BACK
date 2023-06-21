import { Router } from "express";

import { getProducts } from "../controllers/products.controllers";

const router = Router()

router.get('/products',(req,res)=>res.send('prodjhgdajd'))

export default router