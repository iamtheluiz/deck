import fs from 'fs'
import { DeckItem } from '../../@types/DeckItem'

export default function getCommandList (commands: DeckItem[]): DeckItem[] {
  // Insert default values
  commands.fill({ position: -1 } as DeckItem, 0, 20)

  // Get stored commands
  if (fs.existsSync('storage.json')) {
    const data = fs.readFileSync('storage.json')

    commands = JSON.parse(String(data))
  } else {
    console.log('Creating')
    fs.writeFileSync(
      'storage.json',
      JSON.stringify(commands)
    )
  }

  return commands
}
