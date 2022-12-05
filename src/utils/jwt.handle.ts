import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'
const JWT_SECRET = <string>process.env.JWT_SECRET

const generateToken = async (id: string) => {
  const jwt = sign({id}, JWT_SECRET, {
    expiresIn: '7d'
  })
  return jwt
}

const verifyToken = async (jwt: string) => {
  const isOK =  verify(jwt, JWT_SECRET)
  return isOK
}

export {generateToken, verifyToken}
