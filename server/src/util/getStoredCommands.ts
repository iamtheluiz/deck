import fs from 'fs'
import path from 'path'
import DeckItem from '../@types/DeckItem'

export default function (commands: DeckItem[]): DeckItem[] {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, '..', 'database', 'storage.json'))

    return JSON.parse(String(data))
  } catch (error) {
    fs.mkdirSync(path.resolve(__dirname, '..', 'database'))
    fs.writeFileSync(
      path.resolve(__dirname, '..', 'database', 'storage.json'),
      JSON.stringify(commands)
    )
    return commands
  }
}
