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

/* GET mood data for user today */
router.get('/', async (req, res) => {
  try {
    var startOfToday = new Date();
    startOfToday.setHours(0,0,0,0);
    
    var thisUser = req.query.user;
    console.log(thisUser);
    const data = await Mood.find({
      "user": thisUser,
      "createdAt": { "$gte": startOfToday}
    })
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});

/* GET mood data for user over past month */
router.get('/progress', async (req, res) => {
  try {
    var startOfLastMonth = new Date();
    startOfLastMonth.setDate(startOfLastMonth.getDate() - 30);
    startOfLastMonth.setHours(0,0,0,0);
    
    var thisUser = req.query.user;
    console.log(thisUser);
    const data = await Mood.find({
      "user": thisUser,
      "createdAt": { "$gte": startOfLastMonth}
    })
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});

module.exports = router;

