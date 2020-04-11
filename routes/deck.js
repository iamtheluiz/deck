var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('deck', {
    title: 'Device | Virtual Deck',
    commands: req.programData.commands
  })
});

router.get('/:index', (req, res, next) => {
  return res.render('deck', {
    title: 'Device | Virtual Deck',
    folder: req.params.index,
    commands: req.programData.commands[req.params.index].content
  })
});

module.exports = router;