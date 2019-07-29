const { expect } = require('chai');
const { init } = require('./../index');

describe('Validator', () => {
  it('should be a function', () => {
    expect(init).to.be.a('function');
  });
});
