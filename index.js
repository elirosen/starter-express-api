const express = require('express')
const app = express()
const sendSms = require('./post-sms');

// Attach the express.json middleware to route "/sendmessage"
app.use('/sendmessage', express.json({ limit: 100 }))

// handle post request for path /sendmessage
app.post('/sendmessage', (req, res) => {
  const envelope = []
 
    // JSON payload is parsed to extract the message and number to send to 

  const addressee = req.body.number
  const message = req.body.message

  sendSms(addressee, message);

  res.send('Got a POST request and I think I sent a message')
  console.log(addressee + " " + message)

})

app.listen(process.env.PORT || 3000)
