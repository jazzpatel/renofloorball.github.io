/* */ 
var config = require('../config');
module.exports = function isProxyEnabled() {
  return config.useProxy && typeof Proxy !== 'undefined' && typeof Reflect !== 'undefined';
};
