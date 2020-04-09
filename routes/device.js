const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('device', { title: 'Device | Virtual Deck'})
});

module.exports = router;