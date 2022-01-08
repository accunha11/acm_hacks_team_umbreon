const express = require('express');
const { route } = require('./users');
const Exercise = require('../models/exercise.model')
const router = express.Router();

/* POST exercise entry */
router.post('/', async(req, res) => {
  const { user, type, duration, date } = req.body;
  const newExerciseEntry = { user, type, duration, date};
  const exercise = await Exercise.create(newExerciseEntry);
  res.status(200).json({ exercise });
});

/* GET exercise listings */
router.get('/', async (req, res) => {
  const exercise = await Exercise.findAll(); 
  res.status(200).json({ exercise });
});

module.exports = router;
