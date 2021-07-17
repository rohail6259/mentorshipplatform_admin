const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    mentorId: {
        type: String,
        required: true,
    },
});

const Appointments = new mongoose.model(
    "Appointments",
    appointmentSchema,
    "appointment"
);

module.exports.Appointments = Appointments;
