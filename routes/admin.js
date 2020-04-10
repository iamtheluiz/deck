const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('admin', { title: 'Admin | Virtual Deck', commands: req.programData.commands });
});

module.exports = router;