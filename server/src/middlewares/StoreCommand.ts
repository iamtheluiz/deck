import fs from 'fs'
import path from 'path'
import { Request, Response } from 'express'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      io: any;
      client: any;
      commands: any;
    }
  }
}

const store = async (req: Request, res: Response): Promise<Response> => {
  // Create a storage file
  await fs.writeFileSync(
    path.resolve(__dirname, '..', 'database', 'storage.json'),
    JSON.stringify(req.commands)
  )

  return res.json(req.commands)
}

export default store
