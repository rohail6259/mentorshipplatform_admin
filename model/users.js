const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
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
    intro: {
        type: String,
    },
});

const User = new mongoose.model("Users", userSchema, "users");

module.exports.User = User;
