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
      storage: string;
    }
  }
}

const store = (req: Request, res: Response): Response => {
  // Create a storage file
  fs.writeFileSync(
    req.storage,
    JSON.stringify(req.commands)
  )

  return res.json(req.commands)
}

export default store
