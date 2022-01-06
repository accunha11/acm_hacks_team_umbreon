const mongoose = require("mongoose")

const Recipe = mongoose.model(
    "Recipe",
    new mongoose.Schema({
        user: { type: mongoose.Types.ObjectId, required: true},
        isFavorite: { type: Boolean, required: true},
        isToday: { type: Boolean, required: true},
        instructions: { type: String, required: true},
        tags: { type: [String], required: true},
        date: { type: Date, required: true }
    }, {
        timestamps: true
    })
);

module.exports = Recipe;
