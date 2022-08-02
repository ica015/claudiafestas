import express  from "express"
import { authController } from "./controllers/AuthController"
import { catetegoriesController } from "./controllers/CategoryController"
import { FavoriteController } from "./controllers/FavoritesController"
import { LikeController } from "./controllers/LikeController"
import { productsController } from "./controllers/ProductsController"
import { usersController } from "./controllers/UserController"
import { ensureAuth } from "./middlewares/auth"

const router = express.Router()

router.post('/cadastro', authController.register)
router.post('/login', authController.login)

router.get('/categorias', catetegoriesController.index)
router.get('/categoria/:id', catetegoriesController.show)

router.get('/', productsController.index)
router.get('/produtos/destaque', productsController.features)
router.get('/produtos/lancamentos', productsController.lastUploaded)
router.get('/produtos/busca', productsController.findProduct)
router.get('/produtos/populares', productsController.popular)
router.get('/produto/:id', productsController.show)

router.get('/favoritos', ensureAuth, FavoriteController.index)
router.post('/favoritos', ensureAuth, FavoriteController.save)
router.delete('/favoritos/:id', ensureAuth, FavoriteController.delete)

router.post('/like', ensureAuth, LikeController.save)
router.delete('/like/:id', ensureAuth, LikeController.delete)

router.get('/usuario/dados',ensureAuth , usersController.show)
router.put('/usuario/dados',ensureAuth , usersController.update)
router.put('/usuario/atualizar_senha',ensureAuth , usersController.show)

export { router };