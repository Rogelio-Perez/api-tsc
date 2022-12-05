import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const resgisterNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email })

  if (checkIs) return 'User already exists'

  const passHash = await encrypt(password)
  const resgisterNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  })

  return resgisterNewUser
}

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return 'User not found'

  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) return 'Email or password incorrect'

  const token = await generateToken(checkIs.email)

  const data = {
    token,
    user: checkIs,
  }
  
  return data
}

export { resgisterNewUser, loginUser }
