/* */ 
var chai = require('../../chai');
var flag = require('./flag');
var isProxyEnabled = require('./isProxyEnabled');
var transferFlags = require('./transferFlags');
module.exports = function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name),
      _super = function() {};
  if (_get && 'function' === typeof _get.get)
    _super = _get.get;
  Object.defineProperty(ctx, name, {
    get: function overwritingPropertyGetter() {
      if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
        flag(this, 'ssfi', overwritingPropertyGetter);
      }
      var origLockSsfi = flag(this, 'lockSsfi');
      flag(this, 'lockSsfi', true);
      var result = getter(_super).call(this);
      flag(this, 'lockSsfi', origLockSsfi);
      if (result !== undefined) {
        return result;
      }
      var newAssertion = new chai.Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    },
    configurable: true
  });
};
