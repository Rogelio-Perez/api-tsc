import { Response } from 'express'
import dbConnect from '../config/mongo'
import { RequestExt } from '../interfaces/req-ext'
import { Storage } from '../interfaces/storage'
import { registerUpload } from '../services/storage.service'
import { handleHttp } from '../utils/error.handle'

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req
    console.log('file', file)
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    }
    const response = await registerUpload(dataToRegister)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_FILE')
  }
}

export { getFile }
