const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const AWS = require("aws-sdk");
const region = "us-east-1";
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
});
const chime = new AWS.Chime({ region });
chime.endpoint = new AWS.Endpoint(process.env.CHIME_API_URL);

router.get("/", async (req, res) => {
    try {
        const { Meeting } = await chime
            .createMeeting({
                ClientRequestToken: uuid(),
                MediaRegion: region,
            })
            .promise();

        const { Attendee } = await chime
            .createAttendee({
                MeetingId: Meeting.MeetingId,
                ExternalUserId: uuid(),
            })
            .promise();

        res.send({ status: 1, Meeting, Attendee });
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
