/* */ 
var chai = require('../../chai');
var flag = require('./flag');
var isProxyEnabled = require('./isProxyEnabled');
var transferFlags = require('./transferFlags');
module.exports = function addProperty(ctx, name, getter) {
  getter = getter === undefined ? new Function() : getter;
  Object.defineProperty(ctx, name, {
    get: function propertyGetter() {
      if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
        flag(this, 'ssfi', propertyGetter);
      }
      var result = getter.call(this);
      if (result !== undefined)
        return result;
      var newAssertion = new chai.Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    },
    configurable: true
  });
};
