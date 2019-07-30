const appRoot = require('app-root-path');
const path = require('path');
const fs = require('path');

const getConfigFile = () => {
  const configFile = path.resolve(appRoot.path, './commitValidatorrc.js');
  if ( !fs.access( configFile ) ) {
    return DEFAULT_CONFIG;
  } else {
    require(configFile);
  }
}
const validate = (msg) => {
  const config = getConfigFile();
  return msg;
}

module.exports = {
  validate
}
