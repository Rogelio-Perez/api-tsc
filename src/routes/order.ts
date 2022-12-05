import { Router } from "express"
import { getBlogs } from "../controllers/order"
import { checkJwt } from "../middleware/session"

// Solo acceden las personas con sesion activa

const router = Router()

router.get('/', checkJwt, getBlogs)

export {router}