import express, { Request } from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import { DeckItem } from '../../@types/DeckItem';

import routes from './routes';
import getCommandList from './lib/getCommandList';

const port = 4531;
const app = express();

const server = http.createServer(app);

let client = '';
let commands: DeckItem[] = Array(20);
commands = getCommandList(commands);

const io = new Server(server, { serveClient: false });

io.on('connection', (socket) => {
  client = socket.id;
});

app.use((req: Request, res, next) => {
  req.io = io;
  req.client = client;
  req.commands = commands;

  return next();
});

app.use(express.json());
app.use(cors());

app.use(routes);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application running at 'localhost:${port}'`);
});
