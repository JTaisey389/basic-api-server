'use strict'

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js')
const errors = require('./error-handlers/500.js')

const logger = require('./middleware/logger');
const placesRoutes = require('./routes/places');
const snacksRoutes = require('./routes/snacks.js');

app.use(express.json());

app.use(logger);
app.use(placesRoutes);
app.use(snacksRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on: ${port}`));
  }
}