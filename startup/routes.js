const express = require("express");
const homeRouter = require("../routes/home");
const signupRouter = require("../routes/signup");
const loginRouter = require("../routes/login");
const userRouter = require("../routes/user");
const mentorsRouter = require("../routes/mentors");
const meetingRouter = require("../routes/meeting");
const appointmentsRouter = require("../routes/appointments");
const error = require("../middleware/error");
const cors = require("cors");

const corsOptions = {
    exposedHeaders: "x-auth-token",
};

module.exports = function (app) {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use("/api/home", homeRouter);
    app.use("/api/signup", signupRouter);
    app.use("/api/login", loginRouter);
    app.use("/api/user", userRouter);
    app.use("/api/mentors", mentorsRouter);
    app.use("/api/meeting", meetingRouter);
    app.use("/api/appointment", appointmentsRouter);
    app.use(error);
};
