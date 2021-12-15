const mongoose = require("mongoose")

const Sleep = mongoose.model(
    "Sleep",
    new mongoose.Schema({
        username: { type: String, required: true },
        goal: { type: Number, required: true },
        hours: { type: Number, required: true },
        date: { type: Date, required: true }
    }, {
        timestamps: true
    })
);

module.exports = Sleep;
