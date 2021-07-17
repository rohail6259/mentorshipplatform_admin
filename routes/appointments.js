const express = require("express");
const router = express.Router();
const { Appointments } = require("../model/appointments");

router.get("/", async (req, res) => {
    const result = await Appointments.find();
    res.send(result);
});

router.post("/", async (req, res) => {
    const appointment = new Appointments({
        date: req.body.date,
        time: req.body.time,
        mentorId: req.body.mentorId,
        userId: req.body.userId,
    });

    await appointment.save();
    res.send({ status: 1, result: appointment });
});

router.put("/:id", async (req, res) => {
    const updateAppointment = await Appointments.findByIdAndUpdate(
        { _id: req.params.id },
        {
            date: req.body.date,
            time: req.body.time,
            mentorId: req.body.mentorId,
            userId: req.body.userId,
        },
        { upsert: true }
    );
    if (!updateAppointment)
        return res
            .status(400)
            .send({ code: 400, message: "Apointment ID not found!" });
    res.send({status: 1, message: "Appointment updated!"});
});

module.exports = router;
