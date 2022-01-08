const mongoose = require("mongoose")

const Exercise = mongoose.model(
    "Exercise",
    new mongoose.Schema({
        user: { 
            type: mongoose.Types.ObjectId, 
            required: true 
        },
        type: { 
            type: String, 
            required: true
        },
        duration: { 
            type: Number, 
            required: true 
        },
        date: { 
            type: Date, 
            required: true 
        }
    }, {
        timestamps: true
    })
);

module.exports = Exercise;
