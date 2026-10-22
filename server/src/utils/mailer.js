const nodemailer = require("nodemailer");
const { env } = require("../config/env");

async function sendMail({ name, email, subject, message }) {
  if (!env.mail.host || !env.mail.user || !env.mail.pass || !env.mail.to) {
    console.log("Contact message skipped because mail environment variables are not configured.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: env.mail.host,
    port: env.mail.port,
    secure: env.mail.port === 465,
    auth: {
      user: env.mail.user,
      pass: env.mail.pass
    }
  });

  await transporter.sendMail({
    from: env.mail.user,
    to: env.mail.to,
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });
}

module.exports = { sendMail };
