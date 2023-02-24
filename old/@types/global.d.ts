import socket from 'socket.io'
import { DeckItem } from './DeckItem'

export {}

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
