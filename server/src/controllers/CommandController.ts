import { Request, Response } from 'express'

interface DeckItem {
  id?: number,
  position: number,
  icon?: string,
  name?: string,
  type?: string
}

const commands: DeckItem[] = [
  {
    id: 1,
    position: 1,
    name: 'twitch',
    icon: 'https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png'
  }
]

class CommandController {
  index (req: Request, res: Response): Response {
    const serializedItems: DeckItem[] = Array(20)

    // Insert default values
    serializedItems.fill({} as DeckItem, 0, 20)

    // Define items from server
    commands.map(item => {
      serializedItems[item.position - 1] = {
        ...item
      }
    })

    return res.json(serializedItems)
  }

  store (req: Request, res: Response): Response {
    const { id, icon, name, position } = req.body

    const command = {
      id,
      icon,
      name
    }

    commands[position + 1] = { ...command, position: position + 1 }

    return res.json(command)
  }
}

export default CommandController
