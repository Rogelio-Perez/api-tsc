import { Request, Response } from "express"
import { loginUser, resgisterNewUser } from "../services/auth.service"

const registerCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const responseUser = await resgisterNewUser(body)
    res.send(responseUser)
  } catch (error) {
    console.log(error)
  }
}

const loginCtrl = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const responseUser = await loginUser({email, password})

    if(responseUser === 'Email or password incorrect') {
      res.status(403).send(responseUser)
    } else {
      res.send(responseUser)
    }
  } catch (error) {
    console.log(error)
  }
}

export { registerCtrl, loginCtrl }