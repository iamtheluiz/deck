import { Request, Response, NextFunction } from 'express';
import openOnDesktop from 'opener';
import robot from 'robotjs';

class CommandController {
  static index(req: Request, res: Response): Response {
    return res.json(req.commands);
  }

  static store(req: Request, res: Response, next: NextFunction): void {
    const { icon, name, type, position, content } = req.body;

    const command = {
      icon,
      name,
      type,
      position,
      content,
    };

    if (type === 'Folder') {
      command.content = [];
    }

    req.commands[position] = command;

    req.io.to(req.client).emit('new-command', req.commands);

    return next();
  }

  static update(req: Request, res: Response, next: NextFunction): void {
    const { icon, name, type, position, content } = req.body;

    const command = {
      icon,
      name,
      type,
      position,
      content,
    };

    if (type === 'Folder') {
      command.content = [];
    }

    req.commands[position] = command;

    req.io.to(req.client).emit('new-command', req.commands);

    return next();
  }

  static remove(req: Request, res: Response, next: NextFunction): void {
    const position = parseInt(req.params.position);

    req.commands[position] = { position: -1 };

    req.io.to(req.client).emit('new-command', req.commands);

    return next();
  }

  static reset(req: Request, res: Response, next: NextFunction): void {
    const commands: any[] = [];
    commands.fill({ position: -1 }, 0, 20);
    req.commands = commands;

    req.io.to(req.client).emit('new-command', commands);

    return next();
  }

  static execute(req: Request<{ position: string }>, res: Response): Response {
    const position = parseInt(req.params.position);

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

    return res.json({
      success: true,
    });
  }
}

export default CommandController;
