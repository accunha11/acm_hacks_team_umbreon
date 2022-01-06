const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercise');
const recipeRouter = require('./routes/recipe');
const sleepRouter = require('./routes/sleep');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/exercise', exerciseRouter);
app.use('/recipe', recipeRouter);
app.use('/sleep', sleepRouter);


dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
