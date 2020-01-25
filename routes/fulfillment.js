const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const router = express.Router();
const serviceAccount = require("../service-account.json");
const { google } = require("googleapis");

router.post("/", async (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function snoopy(agent) {
    agent.add(`I'm overriding this response`);
  }

  const calendarId = "hces0t4ocvhjfvmi471q79enog@group.calendar.google.com";

  const serviceAccountAuth = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: "https://www.googleapis.com/auth/calendar"
  });

  const calendar = google.calendar("v3");
  // process.env.DEBUG = "dialogflow:*"; // enables lib debugging statements

  const timeZone = "Vancouver/British_Columbia";
  const timeZoneOffset = "-08:00";

  const appointment_type = agent.parameters.AppointmentType;

  async function makeAppointment(agent) {
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

    // Check the availibility of the time, and make an appointment if there is time on the calendar
    try {
      await createCalendarEvent(dateTimeStart, dateTimeEnd, appointment_type);
      agent.add(
        `Ok, let me see if we can fit you in. ${appointmentTimeString} is fine!.`
      );
    } catch (e) {
      agent.add(
        `I'm sorry, there are no slots available for ${appointmentTimeString}.`
      );
    }
  }

  function createCalendarEvent(dateTimeStart, dateTimeEnd, appointment_type) {
    return new Promise((resolve, reject) => {
      calendar.events.list(
        {
          auth: serviceAccountAuth,
          calendarId: calendarId,
          timeMin: dateTimeStart.toISOString(),
          timeMax: dateTimeEnd.toISOString()
        },
        (err, calendarResponse) => {
          // Check if there is a event already on the Calendar
          if (err || calendarResponse.data.items.length > 0) {
            reject(
              err ||
                new Error("Requested time conflicts with another appointment")
            );
          } else {
            // Create event for the requested time period
            calendar.events.insert(
              {
                auth: serviceAccountAuth,
                calendarId: calendarId,
                resource: {
                  summary: appointment_type + " Appointment",
                  description: appointment_type,
                  start: { dateTime: dateTimeStart },
                  end: { dateTime: dateTimeEnd }
                }
              },
              (err, event) => {
                err ? reject(err) : resolve(event);
              }
            );
          }
        }
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
