import { Router } from "express";

import { getProducts,getProducts1} from "../controllers/products.controllers";



const router = Router()
router.post('/product/:i',getProducts1)
router.post('/products/:v/:n',getProducts)




export default router