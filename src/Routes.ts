import express  from "express"
import { catetegoriesController } from "./controllers/CategoryController"

const router = express.Router()

router.get('/categories', catetegoriesController.index)
router.get('/categories/:id', catetegoriesController.show)

export { router };