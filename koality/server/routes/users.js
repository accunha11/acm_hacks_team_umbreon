const express = require('express');
const { route } = require('./users');
const User = require('../models/user.model')
const router = express.Router();

/* POST user entry */
router.post('/', async(req, res) => {
  const { username, email, password } = req.body;
  const newUser = { username, email, password };
  const user = await User.create(newUser);
  res.status(200).json({ user });
});

module.exports = router;

