const express = require("express");

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const app = express();
const client = require("twilio")(accountSid, authToken);
app.use(express.json());
app.use(express.static("public"));

app.post("/sendSms", (req, res) => {
  const ordernum = req.body.name
  const message = "Your Nechamit's Treats order " + ordernum + " is ready for pickup";
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.customer.phone,
    })
    .then((message) => {
      res.json({ message: message });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: error.message });
    });
});

var port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
