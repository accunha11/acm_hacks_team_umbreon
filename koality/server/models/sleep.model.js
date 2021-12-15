const mongoose = require("mongoose")

const Sleep = mongoose.model(
    "Sleep",
    new mongoose.Schema({
        sleepGoal: Number,
        sleepHours: Number,
        sleepBedtime: Date,
    })
);

module.exports = Sleep;
