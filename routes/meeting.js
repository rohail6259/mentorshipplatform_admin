const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const AWS = require("aws-sdk");
const region = "us-east-1";
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const chime = new AWS.Chime({ region });
chime.endpoint = new AWS.Endpoint(process.env.API_URL);

router.get("/", async (req, res) => {
    try {
        const response = {};
        response.meetingResponse = await chime
            .createMeeting({
                ClientRequestToken: uuid(),
                MediaRegion: region,
            })
            .promise();

        response.attendee = await chime
            .createAttendee({
                MeetingId: response.meetingResponse.Meeting.MeetingId,
                ExternalUserId: uuid(),
            })
            .promise();

        res.send(response);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
