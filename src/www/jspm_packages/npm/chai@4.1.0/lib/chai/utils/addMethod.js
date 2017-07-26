/* */ 
var addLengthGuard = require('./addLengthGuard');
var chai = require('../../chai');
var flag = require('./flag');
var proxify = require('./proxify');
var transferFlags = require('./transferFlags');
module.exports = function addMethod(ctx, name, method) {
  var methodWrapper = function() {
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', methodWrapper);
    }
    var result = method.apply(this, arguments);
    if (result !== undefined)
      return result;
    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
  addLengthGuard(methodWrapper, name, false);
  ctx[name] = proxify(methodWrapper, name);
};
