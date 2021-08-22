import fs from 'fs'
import { Request, Response } from 'express'

const store = (req: Request, res: Response): Response => {
  // Create a storage file
  fs.writeFile(
    req.storage,
    JSON.stringify(req.commands),
    function (err) {
      if (err) throw err
      console.log('complete')
    }
  )

  console.log(req.commands)

  return res.json(req.commands)
}

export default store
