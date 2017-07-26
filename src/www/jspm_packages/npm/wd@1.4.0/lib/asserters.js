/* */ 
var _ = require('./lodash');
var __slice = Array.prototype.slice;
var utils = require('./utils');
var deprecator = utils.deprecator;
function Asserter(_assert) {
  this.assert = _assert;
}
var nonEmptyText = new Asserter(function(target, cb) {
  target.text(function(err, text) {
    if (err) {
      return cb(err);
    }
    var satisfied = text && _(text).trim().value().length > 0;
    cb(null, satisfied, satisfied ? text : undefined);
  });
});
function textInclude(content) {
  return new Asserter(function(target, cb) {
    target.text(function(err, text) {
      if (err) {
        return cb(err);
      }
      var satisfied = text && _(text).includeString(content).value();
      cb(null, satisfied, satisfied ? text : undefined);
    });
  });
}
var isDisplayed = new Asserter(function(el, cb) {
  el.isDisplayed(function(err, displayed) {
    if (err) {
      return cb(err);
    }
    cb(null, displayed);
  });
});
var isVisible = new Asserter(function() {
  deprecator.warn('isVisible asserter', 'isVisible asserter has been deprecated, use isDisplayed asserter instead.');
  var args = __slice.call(arguments, 0);
  isDisplayed.assert.apply(this, args);
});
var isNotDisplayed = new Asserter(function(el, cb) {
  el.isDisplayed(function(err, displayed) {
    if (err) {
      return cb(err);
    }
    cb(null, !displayed);
  });
});
var isHidden = new Asserter(function() {
  deprecator.warn('isHidden asserter', 'isHidden asserter has been deprecated, use isNotDisplayed asserter instead.');
  var args = __slice.call(arguments, 0);
  isNotDisplayed.assert.apply(this, args);
});
function jsCondition(jsConditionExpr, safe) {
  if (safe === undefined) {
    safe = false;
  }
  return new Asserter(function(browser, cb) {
    var _eval = safe ? browser.safeEval : browser.eval;
    _eval.apply(browser, [jsConditionExpr, function(err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res, res);
    }]);
  });
}
module.exports = {
  Asserter: Asserter,
  nonEmptyText: nonEmptyText,
  isDisplayed: isDisplayed,
  isNotDisplayed: isNotDisplayed,
  textInclude: textInclude,
  jsCondition: jsCondition,
  isVisible: isVisible,
  isHidden: isHidden
};
