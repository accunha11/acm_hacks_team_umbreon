const mongoose = require("mongoose")

const Exercise = mongoose.model(
    "Exercise",
    new mongoose.Schema({
        username: { type: String, required: true },
        goal: { type: Number, required: true },
        duration: { type: Number, required: true },
        date: { type: Date, required: true }
    }, {
        timestamps: true
    })
);

module.exports = Exercise;
