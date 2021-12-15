const mongoose = require("mongoose")

const Exercise = mongoose.model(
    "Exercise",
    new mongoose.Schema({
        exerciseGoal: Number,
        exerciseHours: Number
    })
);

module.exports = Exercise;
