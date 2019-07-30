const { expect } = require('chai');
const { validate } = require('./../msg-validator');

describe('Validator', () => {
  it('should be a function', () => {
    expect(validate).to.be.a('function');
  });
  it('should return a string', () => {
    expect(validate('Bazinga')).to.be.a('string');
  });
});
