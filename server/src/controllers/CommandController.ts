import { Request, Response, NextFunction } from 'express'
import opener from 'opener'
import robot from 'robotjs'

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

class CommandController {
  index (req: Request, res: Response): Response {
    return res.json(req.commands)
  }

  store (req: Request, res: Response, next: NextFunction): void {
    const { icon, name, type, position, content } = req.body

    const command = {
      icon,
      name,
      type
    }

    if (type === 'Folder') {
      req.commands[position] = {
        ...command,
        position,
        content: []
      }
    } else {
      req.commands[position] = {
        ...command,
        position,
        content
      }
    }

    req.io.to(req.client).emit('new-command', req.commands)

    return next()
  }

  update (req: Request, res: Response, next: NextFunction): void {
    const { icon, name, type, position, content } = req.body

    const command = {
      icon,
      name,
      type
    }

    if (type === 'Folder') {
      req.commands[position] = {
        ...command,
        position,
        content: []
      }
    } else {
      req.commands[position] = {
        ...command,
        position,
        content
      }
    }

    req.io.to(req.client).emit('new-command', req.commands)

    return next()
  }

  execute (req: Request, res: Response): Response {
    const { position }: any = req.params

    const type = req.commands[position].type
    let content = req.commands[position].content

    if (type === 'Program' || type === 'Website') {
      // Execute command
      opener(content)
    } else if (type === 'Shortcut') {
      content = JSON.parse(content)

      // Press keys
      content.forEach((key: string) => {
        robot.keyToggle(key, 'down')
      })

      // Release keys
      content.forEach((key: string) => {
        robot.keyToggle(key, 'up')
      })
    }

    return res.json({
      success: true
    })
  }
}

export default CommandController
