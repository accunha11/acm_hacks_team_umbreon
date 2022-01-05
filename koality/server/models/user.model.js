const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: { type: String, lowercase: true, required: [true, "required username"]},
        email: { type: String, lowercase: true, required: [true, "required email"], match: [/\S+@\S+\.\S+/, "invalid email"]},
        password: String
    }, {
        timestamps: true
    })
);

module.exports = User;
