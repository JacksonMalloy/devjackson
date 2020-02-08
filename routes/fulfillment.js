const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const { google } = require("googleapis");

const router = express.Router();

router.post("/", async (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function snoopy(agent) {
    agent.add(`I'm overriding this response`);
  }

  function makeAppointment(agent) {
    // Authorize Google Calendar
    const CALENDAR_ID = "hces0t4ocvhjfvmi471q79enog@group.calendar.google.com";
    // Format timestamps
    const timeZone = "America/Los_Angeles";
    const timeZoneOffset = "-08:00";
    const dateTimeStart = new Date(
      Date.parse(
        agent.parameters.date.split("T")[0] +
          "T" +
          agent.parameters.time.split("T")[1].split("-")[0] +
          timeZoneOffset
      )
    );
    const dateTimeEnd = new Date(
      new Date(dateTimeStart).setHours(dateTimeStart.getHours() + 1)
    );
    const appointmentTimeString = dateTimeStart.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      timeZone: timeZone
    });

    const appointmentDescription = agent.parameters.description;
    const userEmail = agent.parameters.email;

    const calendar = google.calendar("v3");

    const event = {
      summary: `Chatbot Appointment`,
      description: `${appointmentDescription} || email: ${userEmail}`,
      start: { dateTime: dateTimeStart },
      end: { dateTime: dateTimeEnd }
    };

    sendEmail(function(transporter, mailOptions) {
      transporter.sendMail(mailOptions, function(error, info) {});
    });

    authorize(function(authClient) {
      const req = {
        auth: authClient,
        calendarId: CALENDAR_ID,
        resource: event
      };

      calendar.events.insert(req, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
      });

      agent.add(
        `Ok, I've booked a slot in my developers calendar for ${appointmentTimeString}! He will reach out shortly to ${userEmail}. Is there anything else I could help you with?`
      );
    });
  }

  //Maps intents to functions
  let intentMap = new Map();

  intentMap.set("EEsnoopy", snoopy);
  intentMap.set("Schedule Appointment", makeAppointment);

  agent.handleRequest(intentMap);
});

module.exports = router;
