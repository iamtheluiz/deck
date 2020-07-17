import express, { Request } from 'express'
import cors from 'cors'
import routes from './src/routes'
import socket from 'socket.io'
import DeckItem from './src/@types/DeckItem'
import getStoredCommands from './src/util/getStoredCommands'

const port = 4531
const app = express()

const server = app.listen(port, () => {
  console.log(`Application running at 'localhost:${port}'`)
})

let commands: DeckItem[] = Array(20)

// Insert default values
commands.fill({ position: 0 } as DeckItem, 0, 20)

commands = getStoredCommands(commands)

let client: any = null

const io = socket.listen(server)

io.on('connection', socket => {
  client = socket.id
})

app.use((req: Request, res, next) => {
  req.io = io
  req.client = client
  req.commands = commands

  return next()
})

app.use(express.json())
app.use(cors())

app.use(routes)
