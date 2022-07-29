import express  from "express"
import { authController } from "./controllers/AuthController"
import { catetegoriesController } from "./controllers/CategoryController"
import { FavoriteController } from "./controllers/FavoritesController"
import { productsController } from "./controllers/ProductsController"
import { ensureAuth } from "./middlewares/auth"

const router = express.Router()

router.post('/cadastro', authController.register)
router.post('/login', authController.login)

router.get('/categorias', catetegoriesController.index)
router.get('/categoria/:id', catetegoriesController.show)

router.get('/', productsController.index)
router.get('/produtos/destaque', productsController.features)
// router.get('/produtos/destaque', ensureAuth, productsController.features) //rota protegida
router.get('/produtos/lancamentos', productsController.lastUploaded)
router.get('/produtos/busca', productsController.findProduct)
router.get('/produto/:id', productsController.show)

router.get('/favoritos', ensureAuth, FavoriteController.index)
router.post('/favoritos', ensureAuth, FavoriteController.save)



export { router };