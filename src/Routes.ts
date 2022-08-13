import express  from "express"
import { AddressController } from "./controllers/AddressController"
import { authController } from "./controllers/AuthController"
import { CartController } from "./controllers/CartController"
import { catetegoriesController } from "./controllers/CategoryController"
import { FavoriteController } from "./controllers/FavoritesController"
import { LikeController } from "./controllers/LikeController"
import { productsController } from "./controllers/ProductsController"
import { PurchaseController } from "./controllers/PurchaseController"
import { usersController } from "./controllers/UserController"
import { VisitedController } from "./controllers/VisitedController"
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

router.get('/historico', ensureAuth, VisitedController.index )

router.get('/favoritos', ensureAuth, FavoriteController.index)
router.post('/favoritos', ensureAuth, FavoriteController.save)
router.delete('/favoritos/:id', ensureAuth, FavoriteController.delete)

router.post('/like', ensureAuth, LikeController.save)
router.delete('/like/:id', ensureAuth, LikeController.delete)

router.get('/usuario/dados',ensureAuth , usersController.show)
router.put('/usuario/dados',ensureAuth , usersController.update)
router.put('/usuario/atualizar_senha',ensureAuth , usersController.updatePassword)
router.post('/usuario/endereco', ensureAuth, AddressController.create)
router.get('/usuario/endereco', ensureAuth, AddressController.show)
router.put('/usuario/endereco', ensureAuth, AddressController.update)
router.delete('/usuario/endereco/:id', ensureAuth, AddressController.delete)

router.get('/carrinho', ensureAuth, CartController.listCart)
router.post('/carrinho', ensureAuth, CartController.novoProduto)
router.delete('/carrinho/remover_item/:id', ensureAuth, CartController.removerItem)
router.put('/carrinho', ensureAuth, CartController.updateQuantityItem)

router.post('/confirmar_compra', ensureAuth, PurchaseController.create)
router.get('/confirmar_compra/:id', ensureAuth, PurchaseController.index)


export { router };