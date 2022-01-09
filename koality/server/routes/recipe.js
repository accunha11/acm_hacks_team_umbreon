const express = require('express');
const { route } = require('./users');
const Recipe = require('../models/recipe.model')
const router = express.Router();

/* POST recipe entry */
router.post('/', async(req, res) => {
  const { user, title, isFavorite, isToday, instructions, tags, date } = req.body;
  const newRecipeEntry = { user, title, isFavorite, isToday, instructions, tags, date};
  const recipe = await Recipe.create(newRecipeEntry);
  res.status(200).json({ recipe });
});


/* GET all recipe data for user */
router.get('/', async (req, res) => {
  try {
    var thisUser = req.query.user;
    const data = await Recipe.find({
      "user": thisUser
    })
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});

/* GET recipe data for user today */
router.get('/today', async (req, res) => {
  try {
    
    var thisUser = req.query.user;
    var isToday = req.query.isToday;

    const data = await Recipe.find({
      "user": thisUser,
      "isToday": isToday
    })
    
    res.status(200).json({ data });

  } catch(err) {
    res.status(500).send();
  }
  
});



module.exports = router;
