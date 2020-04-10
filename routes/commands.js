const express = require('express');
const router = express.Router();
const opener = require('opener');

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

router.get('/execute', (req, res, next) => {
  const command = req.programData.commands[req.headers.index];

  // Execute command
  opener(command.content);

  res.json({
    success: true
  })
});

module.exports = router;