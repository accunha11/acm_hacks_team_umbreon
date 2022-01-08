const express = require('express');
const { route } = require('./mood');
const Mood = require('../models/mood.model')
const router = express.Router();

/* POST mood entry */
router.post('/', async(req, res) => {
  const { user, mood } = req.body;
  const newMood = { user, mood };
  const moodEntry = await Mood.create(newMood);
  res.status(200).json({ moodEntry });
});

module.exports = router;

