const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const sendSms = (addressee, message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: addressee
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;