/* eslint-disable no-unused-vars */
import socket from 'socket.io';
import { DeckItem } from './DeckItem';

export {};

declare global {
  namespace Express {
    interface Request {
      io: socket.Server;
      client: string;
      commands: DeckItem[];
      storage: string;
    }
  }
}
