import { Router } from "express";

import { getproducts } from "../controllers/products.controllers";

const router = Router()

router.get('/products',getproducts)

export default router