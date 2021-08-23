import { Request, Response, NextFunction } from 'express'
import openOnDesktop from 'opener'
import robot from 'robotjs'

class CommandController {
  index (req: Request, res: Response): Response {
    return res.json(req.commands)
  }

  store (req: Request, res: Response, next: NextFunction): void {
    const { icon, name, type, position, content } = req.body

    const command = {
      icon,
      name,
      type,
      position,
      content
    }

    if (type === 'Folder') {
      command.content = []
    }

    req.commands[position] = command

    req.io.to(req.client).emit('new-command', req.commands)

    return next()
  }

  update (req: Request, res: Response, next: NextFunction): void {
    const { icon, name, type, position, content } = req.body

    const command = {
      icon,
      name,
      type,
      position,
      content
    }

    if (type === 'Folder') {
      command.content = []
    }

    req.commands[position] = command

    req.io.to(req.client).emit('new-command', req.commands)

    return next()
  }

  execute (req: Request<{ position: string }>, res: Response): Response {
    const position = parseInt(req.params.position)

    const type = req.commands[position].type
    let content = req.commands[position].content

    if (type === 'Program' || type === 'Website') {
      // Execute command
      openOnDesktop(content)
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
