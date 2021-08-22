import express, { Request } from 'express'
import fs from 'fs'
import path from 'path'
import http from 'http'
import cors from 'cors'
import routes from './src/routes'
import socket from 'socket.io'
import DeckItem from './src/@types/DeckItem'

const port = 4531
const app = express()

const server = http.createServer(app)

let commands: DeckItem[] = Array(20)

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

let client = ''

const io = socket(server, { serveClient: false })

io.on('connection', socket => {
  client = socket.id
})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      io: socket.Server;
      client: string;
      commands: DeckItem[];
      storage: string;
    }
  }
}

app.use((req: Request, res, next) => {
  req.io = io
  req.client = client
  req.commands = commands
  req.storage = path.resolve(__dirname, 'storage.json')

  return next()
})

app.use(express.json())
app.use(cors())

app.use(routes)

server.listen(port, () => {
  console.log(`Application running at 'localhost:${port}'`)
})
