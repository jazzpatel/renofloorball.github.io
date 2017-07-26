/* */ 
var addLengthGuard = require('./addLengthGuard');
var chai = require('../../chai');
var flag = require('./flag');
var proxify = require('./proxify');
var transferFlags = require('./transferFlags');
module.exports = function overwriteMethod(ctx, name, method) {
  var _method = ctx[name],
      _super = function() {
        throw new Error(name + ' is not a function');
      };
  if (_method && 'function' === typeof _method)
    _super = _method;
  var overwritingMethodWrapper = function() {
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', overwritingMethodWrapper);
    }
    var origLockSsfi = flag(this, 'lockSsfi');
    flag(this, 'lockSsfi', true);
    var result = method(_super).apply(this, arguments);
    flag(this, 'lockSsfi', origLockSsfi);
    if (result !== undefined) {
      return result;
    }
    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
  addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = proxify(overwritingMethodWrapper, name);
};
