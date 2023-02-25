import fs from 'fs';
import { Request, Response } from 'express';

const store = (req: Request, res: Response): Response => {
  // Create a storage file
  fs.writeFile(req.storage, JSON.stringify(req.commands), function (err) {
    if (err) throw err;
  });

  return res.json(req.commands);
};

export default store;
