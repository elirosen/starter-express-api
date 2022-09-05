const express = require('express')
const app = express()

app.post('/', (req, res) => {
  res.send('Got a POST request')
})
app.listen(process.env.PORT || 3000)
