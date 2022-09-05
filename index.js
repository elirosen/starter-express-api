const express = require('express')
const app = express()
const sendSms = require('./post-sms');


app.post('/pickupready', (req, res) => {

  sendSms('+18479626103', message);

  res.send('Got a POST request and I think I sent a message')
})

app.listen(process.env.PORT || 3000)
