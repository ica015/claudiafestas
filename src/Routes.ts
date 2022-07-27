import express  from "express"
import { ReadableByteStreamController } from "stream/web"
import { catetegoriesController } from "./controllers/CategoryController"
import { productsController } from "./controllers/ProductsController"

const router = express.Router()

router.get('/categorias', catetegoriesController.index)
router.get('/categoria/:id', catetegoriesController.show)

router.get('/', productsController.index)
router.get('/produtos/destaque', productsController.features)
router.get('/produtos/lancamentos', productsController.lastUploaded)
router.get('/produtos/busca', productsController.findProduct)
router.get('/produto/:id', productsController.show)

export { router };