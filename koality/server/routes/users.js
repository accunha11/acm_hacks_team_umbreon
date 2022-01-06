// const express = require('express');
// const router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   const user = {
//     name: 'ACM Hack',
//     email: 'hack@acmucsd.org'
//   }
//   res.status(200).json({ user });
// });

// module.exports = router;

const express = require('express');
const { route } = require('./users');
const User = require('../models/user.model')
const router = express.Router();

/* POST sleep entry */
router.post('/', async(req, res) => {
  const { username, email, password } = req.body;
  const newUser = { username, email, password };
  const user = await User.create(newUser);
  res.status(200).json({ user });
});

module.exports = router;

