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
    const timeZoneOffset = "-06:00";
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

    const calendar = google.calendar("v3");
    const appointment_type = agent.parameters.AppointmentType;

    // Maybe have to JSONify the object?
    const event = {
      summary: appointment_type + " Appointment",
      description: appointment_type,
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
    });

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

    agent.add(
      `Ok, I've booked a slot in the calendar for ${appointmentTimeString}! I also sent a confirmation to ${userEmail}. Is there anything else I could help you with?`
    );

    // Send user confirmation email

    const userEmail = agent.parameters.Email;

    emailCredentials(function(mailOptions) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "jacksmalloy@gmail.com",
          // MUST ADD PASSWORD HERE
          pass: "Mydogturk5"
        }
      });

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          agent.add(`I've sent you a confirmation email at ${userEmail}`);
        }
      });

      agent.add(`I've sent you a confirmation email at ${userEmail}`);
    });

    function emailCredentials() {
      const mailOptions = {
        from: "jacksmalloy@gmail.com",
        to: userEmail,
        subject: "Appointment Confirmation - Jacks",
        text: `test`
      };
      callback(mailOptions);
    }
  }

  //Maps intents to functions
  let intentMap = new Map();

  intentMap.set("EEsnoopy", snoopy);
  intentMap.set("Schedule Appointment", makeAppointment);

  agent.handleRequest(intentMap);
});

module.exports = router;
