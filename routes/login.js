const express = require("express");
const router = express.Router();
require("dotenv").config();
const { User } = require("../model/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) return res.status(400).send("User not found!");

    bcrypt.compare(req.body.password, user.password, (err, _res) => {
        if (!_res || err) {
            res.status(400).send("Username or Password do not match!");
        } else {
            const accessToken = jwt.sign(
                { _id: user._id, userName: user.userName },
                process.env.JWT_PRIVATE_KEY
            );
            res.header("x-auth-token", accessToken).send({
                userName: user.userName,
                isAuthValid: true,
            });
        }
    });
});

module.exports = router;
