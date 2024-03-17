import fs from 'fs';
import { DeckItem } from '../../../@types/DeckItem';

export default class CommandService {
  static getCommands() {}

  static execute(position: number) {
    const { type } = req.commands[position];
    let { content } = req.commands[position];

    if (type === 'Program' || type === 'Website') {
      // Execute command
      openOnDesktop(content);
    } else if (type === 'Shortcut') {
      content = JSON.parse(content);

      // Press keys
      content.forEach((key: string) => {
        robot.keyToggle(key, 'down');
      });

      // Release keys
      content.forEach((key: string) => {
        robot.keyToggle(key, 'up');
      });
    }
  }
}
