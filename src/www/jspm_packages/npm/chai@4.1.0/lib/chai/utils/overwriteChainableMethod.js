/* */ 
var chai = require('../../chai');
var transferFlags = require('./transferFlags');
module.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];
  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== undefined) {
      return result;
    }
    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
  var _method = chainableBehavior.method;
  chainableBehavior.method = function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== undefined) {
      return result;
    }
    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
};
