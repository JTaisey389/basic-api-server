'use strict';

function errorHandling(err, req, res, next) {
  res.status(500).send('something is wrong');
}

module.exports = errorHandling;