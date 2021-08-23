import express, { Request } from 'express'
import path from 'path'
import http from 'http'
import cors from 'cors'
import socket from 'socket.io'

import { DeckItem } from '../@types/DeckItem'

import routes from './routes'
import getCommandList from './lib/getCommandList'

const port = 4531
const app = express()

const server = http.createServer(app)

let client = ''
let commands: DeckItem[] = Array(20)
commands = getCommandList(commands)

const io = socket(server, { serveClient: false })

io.on('connection', socket => {
  client = socket.id
})

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
