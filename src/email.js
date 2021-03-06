const emailjs = require('emailjs');
let config;

if (!process.env.EMAIL_PASS) {
  config = require('./config.js');
}

const server = emailjs.server.connect({
  user: "contactnoahkellem@gmail.com",
  password: process.env.EMAIL_PASS || config.EMAIL_PASS,
  host: "smtp.gmail.com",
  port: 465,
  ssl: true
});

const sendEmail = (req, res) => {
  const request = req;
  const response = res;

  const name = `${request.body.name}`;
  const email = `${request.body.email}`;
  const body = `${request.body.body}`;

  const message = `Name: ${name} \n
                   Email: ${email} \n
                   Body: ${body}`;

  //TODO: add logic for checking for empty body

  server.send({
    text: message,
    from: "Portfolio Site <contactnoahkellem@gmail.com>",
    to: "Noah <noahkellem@gmail.com>",
    subject: "Someone Filled Out Your Website Form"
  }, (err) => { if (err) console.log(err)});

  response.status(200).json({ message: 'Email sent successfully!' });
};

module.exports = {
  sendEmail,
};
