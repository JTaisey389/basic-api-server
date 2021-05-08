'use strict'

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const clothesRoute = require('./routes/clothes');
const foodRoute = require('./routes/food');

const notFound = require('./error-handlers/404.js')
const errors = require('./error-handlers/500.js')
app.use(express.json());

app.use(logger);
app.use(clothesRoute);
app.use(foodRoute);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on: ${port}`));
  }
}