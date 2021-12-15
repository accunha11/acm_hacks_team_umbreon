const mongoose = require("mongoose")

const Mood = mongoose.model(
    "Mood",
    new mongoose.Schema({
        moodType: String
    })
);

module.exports = Mood;
