const express = require("express");
const userRouter = require("../routes/users");
const loginRouter = require("../routes/login");
const error = require("../middleware/error");
const cors = require("cors");

const corsOptions = {
    exposedHeaders: "x-auth-token",
};

module.exports = function (app) {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use("/api/users", userRouter);
    app.use("/api/login", loginRouter);
    app.use(error);
};
