const mongoose = require("mongoose");

const mentorsSchema = new mongoose.Schema({
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
    picture: {
        type: String,
    },
    // password: {
    //     type: String,
    //     required: true,
    //     minLength: 2,
    //     maxLength: 1024,
    // },
    intro: {
        type: String,
    },
});

const Mentors = new mongoose.model("Mentors", mentorsSchema, "mentors");

module.exports.Mentors = Mentors;
