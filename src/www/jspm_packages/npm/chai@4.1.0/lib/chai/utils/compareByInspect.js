/* */ 
var inspect = require('./inspect');
module.exports = function compareByInspect(a, b) {
  return inspect(a) < inspect(b) ? -1 : 1;
};
