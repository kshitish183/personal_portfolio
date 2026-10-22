const { sendMail } = require("../utils/mailer");

async function sendContactMessage(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All contact fields are required." });
    }

    await sendMail({ name, email, subject, message });

    return res.status(202).json({ message: "Message received." });
  } catch (error) {
    return next(error);
  }
}

module.exports = { sendContactMessage };
