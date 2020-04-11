const express = require('express');
const router = express.Router();
const opener = require('opener');
const robot = require('robotjs');

// Middleware
const commandsMiddleware = require('../middlewares/commands');

router.post('/', (req, res, next) => {
  let { commands } = req.programData;
  let command = {};
  const { name, image, type, content } = req.body;

  if (type === 'folder') {
    command = {
      name,
      image,
      type,
      content: []
    };
  } else {
    command = {
      name,
      image,
      type,
      content: JSON.parse(content)
    };
  }

  if (req.body.folder && req.body.folder !== '') {
    commands[req.body.folder].content[commands[req.body.folder].content.length] = command;
  } else {
    commands[commands.length] = command;
  }

  return next();
}, commandsMiddleware.store);

router.get('/', (req, res, next) => {
  return res.json({
    data: req.programData.commands
  });
});

router.delete('/:index', (req, res, next) => {
  let { commands } = req.programData;

  // Remove array position
  commands.splice(req.params.index, 1);

  return next();
}, commandsMiddleware.store);

router.get('/execute', (req, res, next) => {
  let command = {};

  if (req.headers.folder && req.headers.folder !== '') {
    command = req.programData.commands[req.headers.folder].content[req.headers.index];
  } else {
    command = req.programData.commands[req.headers.index];
  }

  if (command.type === "shortcut") {
    // Press keys
    command.content.forEach(key => {
      robot.keyToggle(key, "down");
    });

    // Release keys
    command.content.forEach(key => {
      robot.keyToggle(key, "up");
    });
  } else {
    // Execute command
    opener(command.content);
  }

  return res.json({
    success: true
  })
});

module.exports = router;