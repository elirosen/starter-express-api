const { response } = require('express');
const express = require('express')
const app = express()
const sendSms = require('./post-sms');

// Attach the express.json middleware to route "/sendmessage"
app.use('/sendmessage', express.json({ limit: 10000 }))

// handle post request for path /sendmessage
app.post('/sendmessage', (req, res) => {
 
    // JSON payload is parsed to extract the message and number to send to 

  const addressee = req.body.customer.number
  const messageContent = "your order is ready for pickups"

  sendSms(addressee, messageContent);

  res.send('Got a POST request and I think I sent a message')


})

app.listen(process.env.PORT || 3000)
