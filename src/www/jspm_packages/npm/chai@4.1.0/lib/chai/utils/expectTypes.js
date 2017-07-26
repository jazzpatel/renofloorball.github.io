/* */ 
var AssertionError = require('assertion-error');
var flag = require('./flag');
var type = require('type-detect');
module.exports = function expectTypes(obj, types) {
  var flagMsg = flag(obj, 'message');
  var ssfi = flag(obj, 'ssfi');
  flagMsg = flagMsg ? flagMsg + ': ' : '';
  obj = flag(obj, 'object');
  types = types.map(function(t) {
    return t.toLowerCase();
  });
  types.sort();
  var str = types.map(function(t, index) {
    var art = ~['a', 'e', 'i', 'o', 'u'].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');
  var objType = type(obj).toLowerCase();
  if (!types.some(function(expected) {
    return objType === expected;
  })) {
    throw new AssertionError(flagMsg + 'object tested must be ' + str + ', but ' + objType + ' given', undefined, ssfi);
  }
};
