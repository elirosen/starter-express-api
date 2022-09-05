// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'your pickup is ready',
     from: '+17207592488',
     to: '+18479626103'
   })
  .then(message => console.log(message.status));
