import { Request, Response, Router } from 'express'
import {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} from '../controllers/item'
import { logMiddleware } from '../middleware/log'

const router = Router()

router.get('/', getItems)
router.get('/:id', logMiddleware, getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router }
