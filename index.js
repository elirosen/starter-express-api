const express = require("express");

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const app = express();
const client = require("twilio")(accountSid, authToken);
app.use(express.json());
app.use(express.static("public"));


//function to check for delivery line_item 

function checkForDeliveryLineItem(){
  let z = req.body.line_items
    for (let a in z) {
      titles = z[a].title
      console.log(titles)

      if (titles === 'Delivery'){
        foundDelivery = true
        console.log("line item # " + a + " is: " + true)

      }else {
        foundDelivery = false
        console.log("line item # " + a + " is: " + false)
    }
}
return foundDelivery
console.log("found delivery is: " + foundDelivery)

}


app.post("/sendSms", (req, res) => {

// check for line item called Delivery
checkForDeliveryLineItem()

  //get the order number
  const ordernum = req.body.name

  //message to send
  const message = "Your Nechamit's Treats order " + ordernum + " is ready for pickup";

  //twilio call
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


/*
var port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
*/