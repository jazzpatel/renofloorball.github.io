/* */ 
var config = require('../config');
var flag = require('./flag');
var getProperties = require('./getProperties');
var isProxyEnabled = require('./isProxyEnabled');
var builtins = ['__flags', '__methods', '_obj', 'assert'];
module.exports = function proxify(obj, nonChainableMethodName) {
  if (!isProxyEnabled())
    return obj;
  return new Proxy(obj, {get: function proxyGetter(target, property) {
      if (typeof property === 'string' && config.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
        if (nonChainableMethodName) {
          throw Error('Invalid Chai property: ' + nonChainableMethodName + '.' + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
        }
        var orderedProperties = getProperties(target).filter(function(property) {
          return !Object.prototype.hasOwnProperty(property) && builtins.indexOf(property) === -1;
        }).sort(function(a, b) {
          return stringDistance(property, a) - stringDistance(property, b);
        });
        if (orderedProperties.length && stringDistance(orderedProperties[0], property) < 4) {
          throw Error('Invalid Chai property: ' + property + '. Did you mean "' + orderedProperties[0] + '"?');
        } else {
          throw Error('Invalid Chai property: ' + property);
        }
      }
      if (builtins.indexOf(property) === -1 && !flag(target, 'lockSsfi')) {
        flag(target, 'ssfi', proxyGetter);
      }
      return Reflect.get(target, property);
    }});
};
function stringDistance(strA, strB, memo) {
  if (!memo) {
    memo = [];
    for (var i = 0; i <= strA.length; i++) {
      memo[i] = [];
    }
  }
  if (!memo[strA.length] || !memo[strA.length][strB.length]) {
    if (strA.length === 0 || strB.length === 0) {
      memo[strA.length][strB.length] = Math.max(strA.length, strB.length);
    } else {
      memo[strA.length][strB.length] = Math.min(stringDistance(strA.slice(0, -1), strB, memo) + 1, stringDistance(strA, strB.slice(0, -1), memo) + 1, stringDistance(strA.slice(0, -1), strB.slice(0, -1), memo) + (strA.slice(-1) === strB.slice(-1) ? 0 : 1));
    }
  }
  return memo[strA.length][strB.length];
}
