const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'netcvwork@gmail.com',
    pass: 'Welcome@123'
  }
});

module.exports = {
  send: function({ email, name, text, subject }) {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
      from,
      to: 'netcvwork@gmail.com',
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
