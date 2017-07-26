/* */ 
var getOwnEnumerablePropertySymbols = require('./getOwnEnumerablePropertySymbols');
module.exports = function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
};
