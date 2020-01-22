const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const router = express.Router();

router.post("/", async (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function snoopy(agent) {
    agent.add(`I'm overriding this response`);
  }

  // Google Calendar API
  // Enter your calendar ID below and service account JSON below
  const calendarId = "hces0t4ocvhjfvmi471q79enog@group.calendar.google.com";
  const serviceAccount = {
    type: "service_account",
    project_id: "devjacks-wcykmq",
    private_key_id: "976cc097abdec8478c6472882063d3a6411b9b4f",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+H4rRGOOUSyDG\nFSU1J/cblJQKFSC8te8921U7DruTkdpg3JdMCUtRM/6E2gpZlm/OBEeWK5FSnOkM\n1H81/f2oiWDL0n3QeKsAaAVv6i6uTVuMur8l1reGON/4dRfHB4CRenUqQYoRpuh3\nl4Yo1M6LNHcAHkqWvhpVQiADvZ4htNX5f6up10VhZydU1rxZPvey6kJO4zlP/TNW\nAFZ7J9s1H2MpfhgixK+ta+Ym92shuLm9OBfhoXip0zCdpZ6YcVhNnvJ38xlXCKg3\n9cki+XxMloKZ4JGdO3630w9pTlBZCn5NVh1Onjcbg362IgDMuzuyWXR0NZzWQirG\nAcLkAhL9AgMBAAECggEAC+vzavAqGRrq57Dcv+wNITQcYlN31Y18/n555jWiynqb\nXHaIoDJ3ABUIETGQ85Qs15jKGl8KAkmnjW/nuC2AkehnYvCEhiWC54geSym+mpxs\nMLNnGArSQD7hwHUrNAZC6BxrK2anrzqtmg4s0fOiLfVwvtenarNp+E2or0NdHpTa\nIfkKkd9mV2v6w1wWRDiwczop7DOKmpUhck5/A5BK9OoZjWXda7zbLzQSMvAjebA6\nt9DYxskmPw9SB2J3ikqjS2eL0bLN70QnMbb72RD+h7V/oN3fkWrOW95VNKeE33kO\ncxZfKCU2Dz62XqJM6BtN6JbJ3Po1ZMC0Y66z4veFuwKBgQDmsQPFrste86ed3/rx\nN+1bUD/buaR+vWAzQkfXWOgNaz62eDpqHCPvJqrxda2CHbkFwiftTiFkl/G0r8Xt\noSDYibyvUNN3JTx+uYvHbQnXs60B078XPaUft32tJF8QjN15zrMdL8Ee1gtm5sJ4\nS7qBZJ/Y91g4FD99JpsNvY7h5wKBgQDS+ypaGnHk8drvYW6VQdbhMfGwCW1GaqL6\nkV9lLy/60JIfgG41CxCTa9uPzkQPVm7frXiY/DjnnAvWxfFzL05oJyESlDGg4cZH\nF43yYhDu9um7LwD22ekst/dgZrcmsXyqiD3Bo090gFoPUP9w7mEQxniTH6rhcW0Z\njiPMgAkPewKBgAgUFNS8XUTS9YCy0j/WPIqhEctpAdiqWw8QeCGTbHTj14teRHVo\nzN1YFk5kV5Ih5lPMS8ekn8i9BWrVaPH8XYEXubLN+snGVQr/BmUSbXDPSvSwbJWs\nw/aLX2xLxMR4mlzknyMbhADHcBjHZfH+fOaBFpPrfXxhQSPp0S43ACTrAoGBAMK/\n480+YenSsqSLDHesSbyfzJgRa5Q3dO/UZvlQwHpGMsvvUkuWRhu+0PKClOKPh1Lj\nntGg6Koqqeb72q/XeAm+LNIoh1MZdVxEStv1V+otc308myhB5/JGcovC5MdLyGbl\n0hO/OuWwYPGIc/J7qI/ClKRB9AucFvgi87qeaT6nAoGAaoTssZILB8hsFKUfrKn1\n2sKHWtr1RID0ozN+9jPzdbITGs/36t2TkxVhVSsgw0F25OdlS+1DwO3aYWXBqQmo\nFBf2Uqa42ix1E6IzMPOm9DWCw6IPQbPyhTDvxlTjAJTjXA+4TRhdQ6dSmjWV7v17\nokwIzUqjuCjv963Z83G6JZk=\n-----END PRIVATE KEY-----\n",
    client_email: "calendarcredentials@devjacks-wcykmq.iam.gserviceaccount.com",
    client_id: "106463731772435487632",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/calendarcredentials%40devjacks-wcykmq.iam.gserviceaccount.com"
  };

  // Set up Google Calendar Service account credentials
  const serviceAccountAuth = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: "https://www.googleapis.com/auth/calendar"
  });

  const calendar = google.calendar("v3");
  process.env.DEBUG = "dialogflow:*"; // enables lib debugging statements

  const timeZone = "America/Los_Angeles";
  const timeZoneOffset = "-07:00";

  console.log("Parameters", agent.parameters);
  const appointment_type = agent.parameters.AppointmentType;

  async function makeAppointment(agent) {
    // Calculate appointment start and end datetimes (end = +1hr from start)
    //console.log("Parameters", agent.parameters.date);
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
          auth: serviceAccountAuth, // List events for time period
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
