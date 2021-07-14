const express = require("express");
const router = express.Router();
const { Mentors } = require("../model/mentors");

router.get("/", async (req, res) => {
    const result = await Mentors.find();
    res.send(result);
});

module.exports = router;
