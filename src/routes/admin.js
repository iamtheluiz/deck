const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('admin', {
    title: 'Admin | Virtual Deck',
    commands: req.programData.commands
  });
});

router.get('/:index', (req, res, next) => {
  return res.render('admin', {
    title: 'Folder | Virtual Deck',
    folder: req.params.index,
    commands: req.programData.commands[req.params.index].content
  });
});

module.exports = router;