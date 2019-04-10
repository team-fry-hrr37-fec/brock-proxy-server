const express = require('express');
const app = (express());
const PORT = 1337;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  console.log(`serving a ${req.method} request to ${req.url}.`);
  next()
})

app.use('/styled-components', express.static(__dirname + '/../node_modules/styled-components/dist/styled-components.browser.esm.js'))

app.listen(PORT, () => {
  console.log(`proxy server listening on port ${PORT}!`);
})