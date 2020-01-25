const nodemailer = require("nodemailer");

function contactForm(agent) {
  const contactForm = {
    email: agent.parameters.Email,
    name: agent.parameters.Name,
    date: agent.parameters.Date
  };

  const { email, name, date } = contactForm;

  const confDate = date
    .toString()
    .split("")
    .slice(0, 10)
    .join("");

  (function sendEmail() {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jacksmalloy@gmail.com",
        // MUST ADD PASSWORD HERE
        pass: "**********"
      }
    });

    const mailOptions = {
      from: "jacksmalloy@gmail.com",
      to: email,
      subject: "Contact Request",
      text: `
        name: ${name},
        email: ${email},
        date: ${confDate}
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email send: " + info.response);
      }
    });

    agent.add(`I've sent an email to ${email}. I'll be in touch soon!`);
  })();
}

intentMap.set("createContactForm", contactForm);
