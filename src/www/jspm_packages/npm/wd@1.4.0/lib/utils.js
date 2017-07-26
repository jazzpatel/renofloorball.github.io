/* */ 
var Args = require('vargs').Constructor,
    _ = require('./lodash'),
    url = require('url'),
    JSONWIRE_ERRORS = require('./jsonwire-errors');
var varargs = exports.varargs = function(args) {
  var fargs = new (Args)(args);
  fargs.callback = fargs.callbackGiven() ? fargs.callback : undefined;
  return fargs;
};
exports.findCallback = function(_arguments) {
  var fargs = varargs(_arguments);
  return fargs.callback;
};
var STRAT_MAPPING = {
  '-ios uiautomation': 'ByIosUIAutomation',
  '-android uiautomator': 'ByAndroidUIAutomator'
};
exports.elFuncSuffix = function(type) {
  var suffix = STRAT_MAPPING[type];
  if (!suffix) {
    suffix = (' by ' + type).replace(/(\s[a-z])/g, function($1) {
      return $1.toUpperCase().replace(' ', '');
    }).replace('Xpath', 'XPath');
  }
  return suffix;
};
exports.elFuncFullType = function(type) {
  if (type === 'css') {
    return 'css selector';
  }
  return type;
};
exports.elementFuncTypes = ['class name', 'css selector', 'id', 'name', 'link text', 'partial link text', 'tag name', 'xpath', 'css', '-ios uiautomation', '-android uiautomator', 'accessibility id'];
var Q_CORE_METHODS = ["then", "catch", "fail", "progress", "finally", "fin", "done", "thenResolve", "thenReject", "nodeify"];
exports.transferPromiseness = function(assertion, promise) {
  _(Q_CORE_METHODS).each(function(methodName) {
    if (promise[methodName]) {
      if (assertion._obj) {
        assertion._obj[methodName] = promise[methodName].bind(promise);
      }
      assertion[methodName] = promise[methodName].bind(promise);
    }
  });
  if (promise._enrich) {
    if (assertion._obj) {
      promise._enrich(assertion._obj);
    }
    promise._enrich(assertion);
  }
};
exports.isPromise = function(x) {
  return (typeof x === "object" || typeof x === "function") && x !== null && typeof x.then === "function";
};
exports.deprecator = {
  deprecationMessageShown: {},
  warnDeprecated: true,
  showHideDeprecation: function(status) {
    if (status !== undefined) {
      this.warnDeprecated = status;
    } else {
      this.warnDeprecated = !this.warnDeprecated;
    }
  },
  warn: function(cat, message) {
    if (this.warnDeprecated && !this.deprecationMessageShown[cat]) {
      this.deprecationMessageShown[cat] = 1;
      console.warn(message);
    }
  }
};
exports.inlineJs = function(script) {
  return script.replace(/[\r\n]/g, '').trim();
};
exports.resolveUrl = function(from, to) {
  if (typeof from === 'object') {
    from = url.format(from);
  }
  if (!from.match(/\/$/)) {
    from += '/';
  }
  return url.parse(url.resolve(from, to));
};
exports.strip = function strip(str) {
  if (typeof(str) !== 'string') {
    return str;
  }
  var x = [];
  _(str.length).times(function(i) {
    if (str.charCodeAt(i)) {
      x.push(str.charAt(i));
    }
  });
  return x.join('');
};
var trimToLength = function(str, length) {
  return (str && str.length > length) ? str.substring(0, length) + '...' : str;
};
exports.trimToLength = trimToLength;
exports.niceArgs = function(args) {
  return JSON.stringify(args).replace(/^\[/, '(').replace(/\]$/, ')');
};
exports.niceResp = function(args) {
  return JSON.stringify(args).replace(/^\[/, '').replace(/\]$/, '');
};
exports.codeToString = function(code) {
  if (typeof code === 'function') {
    code = 'return (' + code + ').apply(null, arguments);';
  }
  return code;
};
var MAX_ERROR_LENGTH = 500;
exports.newError = function(opts) {
  var err = new Error();
  _.each(opts, function(opt, k) {
    err[k] = opt;
  });
  err.inspect = function() {
    var jsonStr = JSON.stringify(err);
    return trimToLength(jsonStr, MAX_ERROR_LENGTH);
  };
  return err;
};
exports.isWebDriverException = function(res) {
  return res && res.class && (res.class.indexOf('WebDriverException') > 0);
};
exports.getJsonwireError = function(status) {
  var jsonwireError = JSONWIRE_ERRORS.filter(function(err) {
    return err.status === status;
  });
  return ((jsonwireError.length > 0) ? jsonwireError[0] : null);
};
