import express  from "express"
import { catetegoriesController } from "./controllers/CategoryController"
import { productsController } from "./controllers/ProductsController"

const router = express.Router()

router.get('/categorias', catetegoriesController.index)
router.get('/categoria/:id', catetegoriesController.show)
router.get('/', productsController.index)
router.get('/produto/:id', productsController.show)

export { router };