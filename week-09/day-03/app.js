const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.send({
      "received": req.query.input,
      "result": req.query.input * 2
    })
  } else {
    res.send({ "error": "Please provide an input!" });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (req.query.name !== true) {
    res.send({ "error": "Please provide a name!" });
  } else if (req.query.title !== true) {
    res.send({ "error": "Please provide a title!" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});