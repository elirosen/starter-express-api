const express = require('express')
const app = express()
const sendSms = require('./post-sms');


app.post('/pickupready', (req, res) => {
  req.body; // JavaScript object containing the parse JSON
 
  sendSms('+18479626103', message);
  res.json(req.body)
  res.send('Got a POST request and I think I sent a message')
})

app.listen(process.env.PORT || 3000)
