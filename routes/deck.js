var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('deck', { title: 'Device | Virtual Deck', commands: req.programData.commands })
});

module.exports = router;