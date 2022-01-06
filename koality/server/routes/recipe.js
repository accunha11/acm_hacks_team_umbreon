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

module.exports = router;
