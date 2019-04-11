const express = require('express');
const app = (express());
const PORT = 1337;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser());
app.use(cors());

app.use(express.static(__dirname + '/../public'));
app.use('/*/styles.css', express.static(__dirname + '/../public/styles.css'));
app.use('/*', express.static(__dirname + '/../public'));

app.use((req, res, next) => {
  console.log(`serving a ${req.method} request to ${req.url}.`);
  next()
})

app.listen(PORT, () => {
  console.log(`proxy server listening on port ${PORT}!`);
})