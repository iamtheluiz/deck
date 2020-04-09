const express = require('express');
const router = express.Router();

// Middleware
const commands = require('../middlewares/commands');

router.post('/', (req, res, next) => {
  let { commands } = req.programData;

  commands[commands.length] = req.body;

  next();
}, commands.store);

router.get('/', (req, res, next) => {
  res.json({
    data: req.programData.commands
  });
});

module.exports = router;