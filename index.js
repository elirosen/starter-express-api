const express = require('express')
const app = express()
const sendSms = require('./post-sms');


app.post('/pickupready', (req, res) => {
  let message = req.body; // take message from post
 
  sendSms('+18479626103', message);
  
  res.send('Got a POST request and I think I sent a message')
})

app.listen(process.env.PORT || 3000)
