const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

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

      sendEmail(function(transporter, mailOptions) {
        transporter.sendMail(mailOptions, function(error, info) {});
      });

      agent.add(
        `Ok, I've booked a slot in the calendar for ${appointmentTimeString}! I also sent a confirmation to ${userEmail}. Is there anything else I could help you with?`
      );
    });

    function sendEmail(callback) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "jacksmalloy@gmail.com",
          pass: "*/7-=]9840-[65190p"
        }
      });

      const mailOptions = {
        from: "jacksmalloy@gmail.com",
        to: userEmail,
        subject: "Test Email",
        text: `
        testing
        `
      };

      callback(transporter, mailOptions);
    }

    function authorize(callback) {
      const authClient = new google.auth.JWT({
        email: "calendarcredentials@devjacks-wcykmq.iam.gserviceaccount.com",
        key: credentials.private_key,
        scopes: ["https://www.googleapis.com/auth/calendar.events"]
      });

      if (authClient == null) {
        console.log("authentication failed");
        return;
      }

      callback(authClient);
    }

    // Send user confirmation email
  }

  //Maps intents to functions
  let intentMap = new Map();

  intentMap.set("EEsnoopy", snoopy);
  intentMap.set("Schedule Appointment", makeAppointment);

  agent.handleRequest(intentMap);
});

module.exports = router;
