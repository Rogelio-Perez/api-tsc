import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { handleHttp } from "../utils/error.handle"

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getBlogs = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'Esto solo lo ven las personas con JWT',
      user: req.user
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BlogS')
  }
}


export {
  getBlogs
}