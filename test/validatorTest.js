const { expect } = require('chai');
const cli = require('./../cli');

describe('Validator', () => {
  it('should be a function', () => {
    expect(cli.init).to.be.a('function');
  });
});
