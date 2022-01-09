const mongoose = require("mongoose")

const Mood = mongoose.model(
    "Mood",
    new mongoose.Schema({
        user: {
            type: mongoose.Types.ObjectId, 
            required: true 
        },
        mood: { 
            type: String, 
            required: true 
        }
    }, {
        timestamps: true
    })
);

module.exports = Mood;
