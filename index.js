const validator = require('./msg-validator');

module.exports = () => validator.validate(process.argv);
