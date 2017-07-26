/* */ 
var client = require('./client');
module.exports = client ? window : global;
