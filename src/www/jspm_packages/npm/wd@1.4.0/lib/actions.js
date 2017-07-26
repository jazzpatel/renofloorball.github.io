/* */ 
var _ = require('lodash'),
    __slice = Array.prototype.slice,
    _ = require('lodash'),
    Webdriver = require('./webdriver'),
    Element = require('./element');
var TouchAction = function(driver) {
  this.driver = driver;
  this.gestures = [];
};
TouchAction.prototype.addGesture = function(action, opts) {
  opts = opts || {};
  var el = opts.element || opts.el;
  if (el && !(el instanceof Element)) {
    throw new Error('Invalid element or el field passed');
  }
  var finalOpts = {};
  _(opts).each(function(value, name) {
    if (_.isNumber(value)) {
      finalOpts[name] = value;
    } else if (value instanceof Element) {
      finalOpts[name] = value.value;
    } else if (value) {
      finalOpts[name] = value;
    }
  });
  if (finalOpts.el) {
    finalOpts.element = finalOpts.el;
    delete finalOpts.el;
  }
  this.gestures.push({
    action: action,
    options: finalOpts
  });
};
TouchAction.prototype.toJSON = function() {
  return this.gestures;
};
TouchAction.prototype.longPress = function(opts) {
  this.addGesture('longPress', opts);
  return this;
};
TouchAction.prototype.moveTo = function(opts) {
  this.addGesture('moveTo', opts);
  return this;
};
TouchAction.prototype.press = function(opts) {
  this.addGesture('press', opts);
  return this;
};
TouchAction.prototype.release = function() {
  this.addGesture('release', {});
  return this;
};
TouchAction.prototype.tap = function(opts) {
  this.addGesture('tap', opts);
  return this;
};
TouchAction.prototype.wait = function(opts) {
  if (_.isNumber(opts)) {
    opts = {ms: opts};
  }
  this.addGesture('wait', opts);
  return this;
};
TouchAction.prototype.cancel = function() {
  this.gestures = [];
};
TouchAction.prototype.perform = function(cb) {
  if (typeof cb === 'function') {
    this.driver.performTouchAction(this, cb);
  } else {
    return this.driver.performTouchAction(this);
  }
};
var MultiAction = function(browserOrElement) {
  if (browserOrElement instanceof Element) {
    this.element = browserOrElement;
    this.browser = this.element.browser;
  } else if (browserOrElement instanceof Webdriver) {
    this.browser = browserOrElement;
  }
  this.actions = [];
};
MultiAction.prototype.toJSON = function() {
  var output = {};
  if (this.element) {
    output.elementId = this.element.value;
  }
  output.actions = _(this.actions).map(function(action) {
    return action.toJSON();
  }).value();
  return output;
};
MultiAction.prototype.add = function() {
  var actions = __slice.call(arguments, 0);
  this.actions = this.actions.concat(actions);
  return this;
};
MultiAction.prototype.cancel = function() {
  this.actions = [];
};
MultiAction.prototype.perform = function(cb) {
  if (typeof cb === 'function') {
    if (this.element) {
      this.element.performMultiAction(this, cb);
    } else {
      this.browser.performMultiAction(this, cb);
    }
  } else {
    if (this.element) {
      return this.element.performMultiAction(this);
    } else {
      return this.browser.performMultiAction(this);
    }
  }
};
module.exports = {
  TouchAction: TouchAction,
  MultiAction: MultiAction
};
