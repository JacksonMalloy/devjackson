const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

router.post("/", async (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function snoopy(agent) {
    agent.add(`I'm overriding this response`);
  }

  function makeAppointment(agent) {
    // Authorize Google Calendar
    const CALENDAR_ID = "hces0t4ocvhjfvmi471q79enog@group.calendar.google.com";
    const credentials = require("../service-account.json");
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
        `Awesome! Your meeting for ${appointmentTimeString} is set! I'm sure he will reach out to your email at ${userEmail} to say hello. Is there anything else I could help you with?`
      );
    });

    function sendEmail() {
      const msg = {
        to: userEmail,
        from: 'tim@devjacks.com',
        subject: 'Meeting with Jackson',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sgMail.send(msg);
    }

    sendEmail()
  }

  //Maps intents to functions
  let intentMap = new Map();

  intentMap.set("EEsnoopy", snoopy);
  intentMap.set("Schedule Appointment", makeAppointment);

  agent.handleRequest(intentMap);
});

module.exports = router;
