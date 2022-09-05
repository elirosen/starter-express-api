const express = require('express');
const app = express();
const port = 3000;
const authToken = process.env.accountSid;

app.get('/', (req, res) => {
  res.send(accountSid);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
