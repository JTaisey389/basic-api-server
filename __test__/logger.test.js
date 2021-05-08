'use strict';

const logger = require('../src/middleware/logger');

describe ('logger with middleware', () => {
  let consoleLookout;
  let req = {};
  let res = {};
  let next = jest.fn();
  
  beforeEach(() => {
    consoleLookout = jest.spyOn(console, 'log').mockImplementation();
  })

  afterEach(() => {
    consoleLookout.mockRestore();
  })
  it('properly logs some output', () => {
    logger(req,res,next);
    expect(consoleLookout).toHaveBeenCalled();
  })
  it('works so go to the next middleware', () => {
    logger(req,res, next);
    expect(next).toHaveBeenCalledWith();
  })
})
