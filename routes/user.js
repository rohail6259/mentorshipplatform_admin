const express = require("express");
const router = express.Router();
const { User } = require("../model/users");

router.get("/", async (req, res) => {
    const result = await User.find();
    console.log(result);
    res.send(result[0]);
});

router.put("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        { _id: req.params.id },
        {
            intro: req.body.intro,
        }
    );
    if (!user)
        return res
            .status(400)
            .send({ code: 400, message: "User ID not found!" });

    res.send("Intro saved!");
});

module.exports = router;