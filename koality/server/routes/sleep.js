const express = require('express');
const { route } = require('./users');
const Sleep = require('../models/sleep.model')
const router = express.Router();

/* POST sleep entry */
router.post('/', async(req, res) => {
  const { username, hours, date } = req.body;
  const newSleepEntry = { username, hours, date };
  const sleep = await Sleep.create(newSleepEntry);
  res.status(200).json({ sleep });
});

module.exports = router;
