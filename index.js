const express = require('express')
const app = express()
const sendSms = require('./post-sms');


app.post('/pickupready', (req, res) => {

  const message = 'Your order is ready to be picked up now';

  sendSms('+18479626103', message);

  res.send('Got a POST request and I think I sent a message')
})

app.listen(process.env.PORT || 3000)
