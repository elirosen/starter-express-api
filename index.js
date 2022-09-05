const express = require('express');
const app = express();
const port = 3000;
const accountSid = process.env.accountSid;
const client = require('twilio')(accountSid, authToken);


app.get('/', (req, res) => {
    client.messages
    .create({
       body: 'your pickup is ready',
       from: '+17207592488',
       to: '+18479626103'
     })});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




  .then(message => console.log(message.status));
