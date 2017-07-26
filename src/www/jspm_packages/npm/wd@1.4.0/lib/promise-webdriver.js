/* */ 
var __slice = Array.prototype.slice,
    Q = require('q'),
    _ = require('./lodash'),
    EventEmitter = require('events').EventEmitter,
    slice = Array.prototype.slice.call.bind(Array.prototype.slice),
    utils = require('./utils');
var elementChainableMethods = ['clear', 'click', 'doubleClick', 'doubleclick', 'flick', 'tap', 'sendKeys', 'submit', 'type', 'keys', 'moveTo', 'sleep', 'noop'];
function filterPromisedMethods(Obj) {
  return _(Obj).functionsIn().filter(function(fname) {
    return !fname.match('^newElement$|^toJSON$|^toString$|^_') && !EventEmitter.prototype[fname];
  }).value();
}
module.exports = function(WebDriver, Element, chainable) {
  function wrap(fn, fname) {
    return function() {
      var _this = this;
      var callback;
      var args = slice(arguments);
      var deferred = Q.defer();
      deferred.promise.then(function() {
        _this.emit("promise", _this, fname, args, "finished");
      });
      for (var i = args.length - 1; i >= 0 && args[i] === undefined; i--) {
        args.pop();
      }
      if (typeof args[args.length - 1] === 'function') {
        callback = args.pop();
        deferred.promise.then(function(value) {
          callback(null, value);
        }, function(error) {
          callback(error);
        });
      }
      args.push(deferred.makeNodeResolver());
      _this.emit("promise", _this, fname, args, "calling");
      fn.apply(this, args);
      if (chainable) {
        return this._enrich(deferred.promise);
      } else {
        return deferred.promise;
      }
    };
  }
  var PromiseElement = function() {
    var args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return Element.apply(this, args);
  };
  PromiseElement.prototype = Object.create(Element.prototype);
  PromiseElement.prototype.isPromised = true;
  var PromiseWebdriver = function() {
    var args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return WebDriver.apply(this, args);
  };
  PromiseWebdriver.prototype = Object.create(WebDriver.prototype);
  PromiseWebdriver.prototype.isPromised = true;
  PromiseWebdriver.prototype.defaultChainingScope = 'browser';
  PromiseWebdriver.prototype.getDefaultChainingScope = function() {
    return this.defaultChainingScope;
  };
  _(filterPromisedMethods(WebDriver.prototype)).each(function(fname) {
    PromiseWebdriver.prototype[fname] = wrap(WebDriver.prototype[fname], fname);
  });
  _(filterPromisedMethods(Element.prototype)).each(function(fname) {
    PromiseElement.prototype[fname] = wrap(Element.prototype[fname], fname);
  });
  PromiseWebdriver.prototype.newElement = function(jsonWireElement) {
    return new PromiseElement(jsonWireElement, this);
  };
  PromiseWebdriver.prototype._enrich = function(obj, currentEl) {
    var _this = this;
    if (utils.isPromise(obj) && !obj.__wd_promise_enriched) {
      var promise = obj;
      promise.__wd_promise_enriched = true;
      _(promise).functionsIn().filter(function(fname) {
        return fname !== 'promiseDispatch';
      }).each(function(fname) {
        var _orig = promise[fname];
        promise[fname] = function() {
          var subobj = _orig.apply(this, __slice.call(arguments, 0));
          return this._enrich(subobj, currentEl);
        };
      });
      var promisedMethods = filterPromisedMethods(Object.getPrototypeOf(_this));
      _this.sampleElement = _this.sampleElement || _this.newElement(1);
      var elementPromisedMethods = filterPromisedMethods(Object.getPrototypeOf(_this.sampleElement));
      var allPromisedMethods = _.union(promisedMethods, elementPromisedMethods);
      _(allPromisedMethods).each(function(fname) {
        promise[fname] = function() {
          var args = __slice.call(arguments, 0);
          var scopeHint;
          if (args && args[0] && typeof args[0] === 'string' && args[0].match(/^[<>]$/)) {
            scopeHint = args[0];
            args = _.drop(args);
          }
          return this.then(function(res) {
            var el;
            if (Element && res instanceof Element) {
              el = res;
            }
            el = el || currentEl;
            var isBrowserMethod = _.indexOf(promisedMethods, fname) >= 0;
            var isElementMethod = el && _.indexOf(elementPromisedMethods, fname) >= 0;
            if (!isBrowserMethod && !isElementMethod) {
              throw new Error("Invalid method " + fname);
            }
            if (isBrowserMethod && isElementMethod) {
              if (scopeHint === '<') {
                isElementMethod = false;
              } else if (scopeHint === '>') {
                isBrowserMethod = false;
              } else if (fname.match(/element/) || (Element && args[0] instanceof Element)) {
                if (_this.defaultChainingScope === 'element') {
                  isBrowserMethod = false;
                } else {
                  isElementMethod = false;
                }
              } else if (Element && args[0] instanceof Element) {
                isElementMethod = false;
              } else {
                isBrowserMethod = false;
              }
            }
            if (isElementMethod) {
              return el[fname].apply(el, args).then(function(res) {
                if (_.indexOf(elementChainableMethods, fname) >= 0) {
                  return el;
                } else {
                  return res;
                }
              });
            } else {
              return _this[fname].apply(_this, args);
            }
          });
        };
      });
      promise._enrich = function(target) {
        return _this._enrich(target, currentEl);
      };
      promise.at = function(i) {
        return _this._enrich(promise.then(function(vals) {
          return vals[i];
        }), currentEl);
      };
      promise.last = function() {
        return promise.then(function(vals) {
          return vals[vals.length - 1];
        });
      };
      promise.nth = function(i) {
        return promise.at(i - 1);
      };
      promise.first = function() {
        return promise.nth(1);
      };
      promise.second = function() {
        return promise.nth(2);
      };
      promise.third = function() {
        return promise.nth(3);
      };
      promise.printError = function(prepend) {
        prepend = prepend || "";
        return _this._enrich(promise.catch(function(err) {
          console.log(prepend + err);
          throw err;
        }), currentEl);
      };
      promise.print = function(prepend) {
        prepend = prepend || "";
        return _this._enrich(promise.then(function(val) {
          console.log(prepend + val);
        }), currentEl);
      };
    }
    return obj;
  };
  PromiseWebdriver.prototype.chain = PromiseWebdriver.prototype.noop;
  PromiseElement.prototype.chain = PromiseElement.prototype.noop;
  PromiseWebdriver.prototype.resolve = function(promise) {
    var qPromise = new Q(promise);
    this._enrich(qPromise);
    return qPromise;
  };
  PromiseElement.prototype.resolve = function(promise) {
    var qPromise = new Q(promise);
    this._enrich(qPromise);
    return qPromise;
  };
  PromiseElement.prototype._enrich = function(target) {
    if (chainable) {
      return this.browser._enrich(target, this);
    }
  };
  PromiseWebdriver._wrapAsync = wrap;
  PromiseWebdriver.prototype._debugPromise = function() {
    this.on('promise', function(context, method, args, status) {
      args = _.clone(args);
      if (context instanceof PromiseWebdriver) {
        context = '';
      } else {
        context = ' [element ' + context.value + ']';
      }
      if (typeof _.last(args) === 'function') {
        args.pop();
      }
      args = ' ( ' + _(args).map(function(arg) {
        if (arg instanceof Element) {
          return arg.toString();
        } else if (typeof arg === 'object') {
          return JSON.stringify(arg);
        } else {
          return arg;
        }
      }).join(', ') + ' )';
      console.log(' --> ' + status + context + " " + method + args);
    });
  };
  return {
    PromiseWebdriver: PromiseWebdriver,
    PromiseElement: PromiseElement
  };
};
