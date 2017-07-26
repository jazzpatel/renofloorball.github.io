/* */ 
var addLengthGuard = require('./addLengthGuard');
var chai = require('../../chai');
var flag = require('./flag');
var proxify = require('./proxify');
var transferFlags = require('./transferFlags');
var canSetPrototype = typeof Object.setPrototypeOf === 'function';
var testFn = function() {};
var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
  var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
  if (typeof propDesc !== 'object')
    return true;
  return !propDesc.configurable;
});
var call = Function.prototype.call,
    apply = Function.prototype.apply;
module.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function() {};
  }
  var chainableBehavior = {
    method: method,
    chainingBehavior: chainingBehavior
  };
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;
  Object.defineProperty(ctx, name, {
    get: function chainableMethodGetter() {
      chainableBehavior.chainingBehavior.call(this);
      var chainableMethodWrapper = function() {
        if (!flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', chainableMethodWrapper);
        }
        var result = chainableBehavior.method.apply(this, arguments);
        if (result !== undefined) {
          return result;
        }
        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(chainableMethodWrapper, name, true);
      if (canSetPrototype) {
        var prototype = Object.create(this);
        prototype.call = call;
        prototype.apply = apply;
        Object.setPrototypeOf(chainableMethodWrapper, prototype);
      } else {
        var asserterNames = Object.getOwnPropertyNames(ctx);
        asserterNames.forEach(function(asserterName) {
          if (excludeNames.indexOf(asserterName) !== -1) {
            return;
          }
          var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
          Object.defineProperty(chainableMethodWrapper, asserterName, pd);
        });
      }
      transferFlags(this, chainableMethodWrapper);
      return proxify(chainableMethodWrapper);
    },
    configurable: true
  });
};
