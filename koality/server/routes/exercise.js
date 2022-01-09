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
router.get('/', async (req, res) => {
  try {
    var startOfToday = new Date();
    startOfToday.setHours(0,0,0,0);
    
    var thisUser = req.query.user;
    console.log(thisUser);
    const data = await Exercise.find({
      "user": thisUser,
      "createdAt": { "$gte": startOfToday}
    })
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});

/* GET exercise data for user over past month */
router.get('/progress', async (req, res) => {
  try {
    var startOfLastMonth = new Date();
    startOfLastMonth.setDate(startOfLastMonth.getDate() - 30);
    startOfLastMonth.setHours(0,0,0,0);
    
    var thisUser = req.query.user;
    console.log(thisUser);
    const data = await Exercise.find({
      "user": thisUser,
      "createdAt": { "$gte": startOfLastMonth}
    })
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});
  

module.exports = router;
