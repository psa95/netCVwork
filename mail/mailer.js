const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ORIG_USER,
    pass: process.env.ORIG_PASS
  }
});

module.exports = {
  send: function({ email, name, text, subject }) {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
      from,
      to: process.env.ORIG_USER,
      subject: `New message from ${from} (NetCVWork)`,
      text,
      replyTo: from
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      )
    })
  }
};
