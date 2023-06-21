import { Router } from "express";

import { getproducts } from "../controllers/products.controllers";

const router = Router()

router.get('/products',getProducts)

export default router