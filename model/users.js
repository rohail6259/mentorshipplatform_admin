const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 1024,
    },
});

const User = new mongoose.model("Users", userSchema, 'users')

module.exports.User = User
