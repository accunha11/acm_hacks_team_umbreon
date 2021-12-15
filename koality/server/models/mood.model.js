const mongoose = require("mongoose")

const Mood = mongoose.model(
    "Mood",
    new mongoose.Schema({
        username: {type: String, required: true },
        mood: { type: String, required: true },
        date: { type: Date, required: true }
    }, {
        timestamps: true
    })
);

module.exports = Mood;
