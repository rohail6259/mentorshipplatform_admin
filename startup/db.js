const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    };

    mongoose.set("useCreateIndex", true);
    // mongoose
    //     .connect(process.env.CONNECTION_STRING, options)
    //     .then(() => console.log("Connected to db..."));

    mongoose
        .connect("mongodb://127.0.0.1:27017", options)
        .then(() => console.log("Connected to db..."));
};
