'use strict';

const Logger = (req, res, next) => {
  console.log('PATH', req.path);
  next();
}

module.exports = Logger;