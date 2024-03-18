import fs from 'fs';
import { Request, Response } from 'express';

const store = (req: Request, res: Response): Response => {
  // Create a storage file
  fs.writeFile('storage.json', JSON.stringify(req.commands), (err) => {
    if (err) throw err;
  });

  return res.json(req.commands);
};

export default store;
