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


/* GET exercise data for user today */
router.get('/:exercise', async (req, res) => {
  try {
    const data = await Exercise.find({
      "type": req.params.type
    })
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});

// /* GET exercise data for user */
// router.get('/', async (req, res) => {
//   try {
//     const exercise = await Exercise.findAll(); 
//     res.json(data);
//   } catch(err) {
//     res.status(500).send();
//   }
// });

module.exports = router;
