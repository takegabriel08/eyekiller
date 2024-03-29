const { response } = require("express");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const Datastore = require("nedb");
require('dotenv').config()
console.log(process.env)
// console.log(`THIS IS PROCESS DOT ENV: ${JSON.stringify(process.env)}`)


const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.emailAddress,
    pass: process.env.mailPassword,
  },
});

const options = {
  from: process.env.emailAddress,
  to: process.env.sendToAddress,
  subject: "Eyekiller contact form mail + ",
  text: "test + ",
};

const portNumber = 3000;
app.listen(process.env.PORT || portNumber, () =>
  console.log(`Listening at ${portNumber}`)
);
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, response) => {
  console.log("FROM SERVER SIDE");
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post("/api", (request, response) => {
  console.log("I got a post from Client side!");
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);

  options.subject = options.subject + data.nick;
  options.text = options.text + data.msgTxt;
  console.log(JSON.stringify(options));

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      return console.log("Email successfully sent: " + JSON.stringify(info));
    }
  });
});
