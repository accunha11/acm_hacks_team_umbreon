const mongoose = require("mongoose")

const Recipe = mongoose.model(
    "Recipe",
    new mongoose.Schema({
        recipeFavorite: Boolean,
        recipePlan: Boolean,
        recipeName: String,
        recipeInstructions: String,
        recipeTags: [String]
    })
);

module.exports = Exercise;
