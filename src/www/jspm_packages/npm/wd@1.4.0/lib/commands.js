/* */ 
(function(Buffer) {
  var fs = require('fs'),
      url = require('url'),
      path = require('path'),
      tmp = require('./tmp'),
      _ = require('./lodash'),
      async = require('async'),
      __slice = Array.prototype.slice,
      config = require('./config'),
      callbacks = require('./callbacks'),
      callbackWithData = callbacks.callbackWithData,
      simpleCallback = callbacks.simpleCallback,
      elementCallback = callbacks.elementCallback,
      elementsCallback = callbacks.elementsCallback,
      elementOrElementsCallback = callbacks.elementOrElementsCallback,
      utils = require('./utils'),
      findCallback = utils.findCallback,
      codeToString = utils.codeToString,
      deprecator = utils.deprecator,
      asserters = require('./asserters'),
      Asserter = asserters.Asserter,
      safeExecuteJsScript = require('../build/safe-execute'),
      safeExecuteAsyncJsScript = require('../build/safe-execute-async'),
      _waitForConditionInBrowserJsScript = require('../build/wait-for-cond-in-browser');
  var commands = {};
  commands.init = function() {
    var args = __slice.call(arguments, 0);
    this._init.apply(this, args);
  };
  commands.status = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      absPath: 'status',
      cb: callbackWithData(cb, this)
    });
  };
  commands.sessions = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      absPath: 'sessions',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getSessionId = function() {
    var cb = findCallback(arguments);
    if (cb) {
      cb(null, this.sessionID);
    }
    return this.sessionID;
  };
  commands.getSessionID = commands.getSessionId;
  commands.execute = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        code = fargs.all[0],
        args = fargs.all[1] || [];
    code = codeToString(code);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/execute',
      cb: callbackWithData(cb, this),
      data: {
        script: code,
        args: args
      }
    });
  };
  commands.safeExecute = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        code = fargs.all[0],
        args = fargs.all[1] || [];
    code = codeToString(code);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/execute',
      cb: callbackWithData(cb, this),
      data: {
        script: safeExecuteJsScript,
        args: [code, args]
      }
    });
  };
  (function() {
    commands.eval = function(code) {
      var cb = findCallback(arguments);
      code = codeToString(code);
      code = "return " + code + ";";
      commands.execute.apply(this, [code, function(err, res) {
        if (err) {
          return cb(err);
        }
        cb(null, res);
      }]);
    };
  })();
  commands.safeEval = function(code) {
    var cb = findCallback(arguments);
    code = codeToString(code);
    commands.safeExecute.apply(this, [code, function(err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res);
    }]);
  };
  commands.executeAsync = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        code = fargs.all[0],
        args = fargs.all[1] || [];
    code = codeToString(code);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/execute_async',
      cb: callbackWithData(cb, this),
      data: {
        script: code,
        args: args
      }
    });
  };
  commands.safeExecuteAsync = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        code = fargs.all[0],
        args = fargs.all[1] || [];
    code = codeToString(code);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/execute_async',
      cb: callbackWithData(cb, this),
      data: {
        script: safeExecuteAsyncJsScript,
        args: [code, args]
      }
    });
  };
  commands.altSessionCapabilities = function() {
    var cb = findCallback(arguments);
    var _this = this;
    commands.sessions.apply(this, [function(err, sessions) {
      if (err) {
        cb(err, sessions);
      } else {
        sessions = sessions.filter(function(session) {
          return session.id === _this.sessionID;
        });
        cb(null, sessions[0] ? sessions[0].capabilities : 0);
      }
    }]);
  };
  commands.sessionCapabilities = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      cb: callbackWithData(cb, this)
    });
  };
  commands.newWindow = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        url = fargs.all[0],
        name = fargs.all[1];
    commands.execute.apply(this, ["var url=arguments[0], name=arguments[1]; window.open(url, name);", [url, name], cb]);
  };
  commands.close = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'DELETE',
      relPath: '/window',
      cb: simpleCallback(cb)
    });
  };
  commands.currentContext = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/context',
      cb: callbackWithData(cb, this)
    });
  };
  commands.context = function(contextRef) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/context',
      cb: simpleCallback(cb),
      data: {name: contextRef}
    });
  };
  commands.contexts = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/contexts',
      cb: callbackWithData(cb, this)
    });
  };
  commands.window = function(windowRef) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/window',
      cb: simpleCallback(cb),
      data: {name: windowRef}
    });
  };
  commands.frame = function(frameRef) {
    var cb = findCallback(arguments);
    if (typeof(frameRef) === 'function') {
      frameRef = null;
    }
    if (frameRef !== null && typeof(frameRef.value) !== "undefined") {
      frameRef = {ELEMENT: frameRef.value};
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/frame',
      cb: simpleCallback(cb),
      data: {id: frameRef}
    });
  };
  commands.windowName = function() {
    var cb = findCallback(arguments);
    commands.eval.apply(this, ["window.name", cb]);
  };
  commands.windowHandle = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/window_handle',
      cb: callbackWithData(cb, this)
    });
  };
  commands.windowHandles = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/window_handles',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getGeoLocation = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/location',
      cb: callbackWithData(cb, this)
    });
  };
  commands.setGeoLocation = function(lat, lon, alt) {
    var cb = findCallback(arguments);
    if (typeof(alt) === 'function') {
      alt = 0;
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/location',
      cb: simpleCallback(cb),
      data: {location: {
          latitude: lat,
          longitude: lon,
          altitude: alt
        }}
    });
  };
  commands.scroll = function(xOffset, yOffset) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/touch/scroll',
      cb: simpleCallback(cb, this),
      data: {
        xoffset: xOffset,
        yoffset: yOffset
      }
    });
  };
  commands.logTypes = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/log/types',
      cb: callbackWithData(cb, this)
    });
  };
  commands.log = function(logType) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/log',
      cb: callbackWithData(cb, this),
      data: {type: logType}
    });
  };
  commands.quit = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'DELETE',
      emit: {
        event: 'status',
        message: '\nEnding your web drivage..\n'
      },
      cb: simpleCallback(cb)
    });
  };
  commands.get = function(_url) {
    if (this._httpConfig.baseUrl) {
      _url = url.resolve(this._httpConfig.baseUrl, _url);
    }
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/url',
      data: {'url': _url},
      cb: simpleCallback(cb)
    });
  };
  commands.refresh = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/refresh',
      cb: simpleCallback(cb)
    });
  };
  commands.maximize = function(win) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/window/' + win + '/maximize',
      cb: simpleCallback(cb)
    });
  };
  commands.windowSize = function(win, width, height) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/window/' + win + '/size',
      data: {
        'width': width,
        'height': height
      },
      cb: simpleCallback(cb)
    });
  };
  commands.getWindowSize = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        win = fargs.all[0] || 'current';
    this._jsonWireCall({
      method: 'GET',
      relPath: '/window/' + win + '/size',
      cb: callbackWithData(cb, this)
    });
  };
  commands.setWindowSize = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        width = fargs.all[0],
        height = fargs.all[1],
        win = fargs.all[2] || 'current';
    this._jsonWireCall({
      method: 'POST',
      relPath: '/window/' + win + '/size',
      cb: simpleCallback(cb),
      data: {
        width: width,
        height: height
      }
    });
  };
  commands.getWindowPosition = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        win = fargs.all[0] || 'current';
    this._jsonWireCall({
      method: 'GET',
      relPath: '/window/' + win + '/position',
      cb: callbackWithData(cb, this)
    });
  };
  commands.setWindowPosition = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        x = fargs.all[0],
        y = fargs.all[1],
        win = fargs.all[2] || 'current';
    this._jsonWireCall({
      method: 'POST',
      relPath: '/window/' + win + '/position',
      cb: simpleCallback(cb),
      data: {
        x: x,
        y: y
      }
    });
  };
  commands.forward = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/forward',
      cb: simpleCallback(cb)
    });
  };
  commands.back = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/back',
      cb: simpleCallback(cb)
    });
  };
  commands.setHttpTimeout = function() {
    deprecator.warn('setHttpTimeout', 'setHttpTimeout/setHTTPInactivityTimeout has been deprecated, use configureHttp instead.');
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        ms = fargs.all[0];
    commands.configureHttp({timeout: ms}, cb);
  };
  commands.setHTTPInactivityTimeout = commands.setHttpTimeout;
  commands.configureHttp = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        opts = fargs.all[0];
    config._configureHttp(this._httpConfig, opts);
    if (cb) {
      cb(null);
    }
  };
  commands.setImplicitWaitTimeout = function(ms) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/timeouts/implicit_wait',
      data: {ms: ms},
      cb: simpleCallback(cb)
    });
  };
  commands.setWaitTimeout = commands.setImplicitWaitTimeout;
  commands.setAsyncScriptTimeout = function(ms) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/timeouts/async_script',
      data: {ms: ms},
      cb: simpleCallback(cb)
    });
  };
  commands.setPageLoadTimeout = function(ms) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/timeouts',
      data: {
        type: 'page load',
        ms: ms
      },
      cb: simpleCallback(cb)
    });
  };
  commands.setCommandTimeout = function(ms) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/timeouts',
      data: {
        type: 'command',
        ms: ms
      },
      cb: simpleCallback(cb)
    });
  };
  commands.element = function(using, value) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/element',
      data: {
        using: using,
        value: value
      },
      cb: elementCallback(cb, this)
    });
  };
  commands.elementOrNull = function(using, value) {
    var cb = findCallback(arguments);
    commands.elements.apply(this, [using, value, function(err, elements) {
      if (!err) {
        if (elements.length > 0) {
          cb(null, elements[0]);
        } else {
          cb(null, null);
        }
      } else {
        cb(err);
      }
    }]);
  };
  commands.elementIfExists = function(using, value) {
    var cb = findCallback(arguments);
    commands.elements.apply(this, [using, value, function(err, elements) {
      if (!err) {
        if (elements.length > 0) {
          cb(null, elements[0]);
        } else {
          cb(null);
        }
      } else {
        cb(err);
      }
    }]);
  };
  commands.elements = function(using, value) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/elements',
      data: {
        using: using,
        value: value
      },
      cb: elementsCallback(cb, this)
    });
  };
  commands.hasElement = function(using, value) {
    var cb = findCallback(arguments);
    commands.elements.apply(this, [using, value, function(err, elements) {
      if (!err) {
        cb(null, elements.length > 0);
      } else {
        cb(err);
      }
    }]);
  };
  commands.waitFor = function() {
    var cb = findCallback(arguments);
    var fargs = utils.varargs(arguments);
    var opts;
    if (typeof fargs.all[0] === 'object' && !(fargs.all[0] instanceof Asserter)) {
      opts = fargs.all[0];
    } else {
      opts = {
        asserter: fargs.all[0],
        timeout: fargs.all[1],
        pollFreq: fargs.all[2]
      };
    }
    opts.timeout = opts.timeout || 1000;
    opts.pollFreq = opts.pollFreq || 200;
    if (!opts.asserter) {
      throw new Error('Missing asserter!');
    }
    var _this = this;
    var endTime = Date.now() + opts.timeout;
    var unpromisedAsserter = new Asserter(function(browser, cb) {
      var promise = opts.asserter.assert(browser, cb);
      if (promise && promise.then && typeof promise.then === 'function') {
        promise.then(function(res) {
          cb(null, true, res);
        }, function(err) {
          if (err.retriable) {
            cb(null, false);
          } else {
            throw err;
          }
        });
      }
    });
    function poll(isFinalCheck) {
      unpromisedAsserter.assert(_this, function(err, satisfied, value) {
        if (err) {
          return cb(err);
        }
        if (satisfied) {
          cb(null, value);
        } else {
          if (isFinalCheck) {
            cb(new Error("Condition wasn't satisfied!"));
          } else if (Date.now() > endTime) {
            setTimeout(poll.bind(null, true), opts.pollFreq);
          } else {
            setTimeout(poll, opts.pollFreq);
          }
        }
      });
    }
    poll();
  };
  commands.waitForElement = function() {
    var cb = findCallback(arguments);
    var fargs = utils.varargs(arguments);
    var using = fargs.all[0],
        value = fargs.all[1];
    var opts;
    if (typeof fargs.all[2] === 'object' && !(fargs.all[2] instanceof Asserter)) {
      opts = fargs.all[2];
    } else if (fargs.all[2] instanceof Asserter) {
      opts = {
        asserter: fargs.all[2],
        timeout: fargs.all[3],
        pollFreq: fargs.all[4]
      };
    } else {
      opts = {
        timeout: fargs.all[2],
        pollFreq: fargs.all[3]
      };
    }
    opts.asserter = opts.asserter || new Asserter(function(el, cb) {
      cb(null, true);
    });
    var unpromisedAsserter = new Asserter(function(el, cb) {
      var promise = opts.asserter.assert(el, cb);
      if (promise && promise.then && typeof promise.then === 'function') {
        promise.then(function() {
          cb(null, true);
        }, function(err) {
          if (err.retriable) {
            cb(null, false);
          } else {
            throw err;
          }
        });
      }
    });
    var wrappedAsserter = new Asserter(function(browser, cb) {
      browser.elements(using, value, function(err, els) {
        if (err) {
          return cb(err);
        }
        var seq = [];
        var satisfiedEl;
        _(els).each(function(el) {
          seq.push(function(cb) {
            if (satisfiedEl) {
              return cb();
            }
            unpromisedAsserter.assert(el, function(err, satisfied) {
              if (err) {
                return cb(err);
              }
              if (satisfied) {
                satisfiedEl = el;
              }
              cb(err);
            });
          });
        });
        async.series(seq, function(err) {
          if (err) {
            return cb(err);
          }
          cb(err, !_.isUndefined(satisfiedEl), satisfiedEl);
        });
      });
    });
    commands.waitFor.apply(this, [{
      asserter: wrappedAsserter,
      timeout: opts.timeout,
      pollFreq: opts.pollFreq
    }, function(err, value) {
      if (err && err.message && err.message.match(/Condition/)) {
        cb(new Error("Element condition wasn't satisfied!"));
      } else {
        cb(err, value);
      }
    }]);
  };
  commands.waitForElements = function() {
    var cb = findCallback(arguments);
    var fargs = utils.varargs(arguments);
    var using = fargs.all[0],
        value = fargs.all[1];
    var opts;
    if (typeof fargs.all[2] === 'object' && !(fargs.all[2] instanceof Asserter)) {
      opts = fargs.all[2];
    } else if (fargs.all[2] instanceof Asserter) {
      opts = {
        asserter: fargs.all[2],
        timeout: fargs.all[3],
        pollFreq: fargs.all[4]
      };
    } else {
      opts = {
        timeout: fargs.all[2],
        pollFreq: fargs.all[3]
      };
    }
    opts.asserter = opts.asserter || new Asserter(function(el, cb) {
      cb(null, true);
    });
    var unpromisedAsserter = new Asserter(function(el, cb) {
      var promise = opts.asserter.assert(el, cb);
      if (promise && promise.then && typeof promise.then === 'function') {
        promise.then(function() {
          cb(null, true);
        }, function(err) {
          if (err.retriable) {
            cb(null, false);
          } else {
            throw err;
          }
        });
      }
    });
    var wrappedAsserter = new Asserter(function(browser, cb) {
      browser.elements(using, value, function(err, els) {
        if (err) {
          return cb(err);
        }
        var seq = [];
        var satisfiedEls = [];
        _(els).each(function(el) {
          seq.push(function(cb) {
            unpromisedAsserter.assert(el, function(err, satisfied) {
              if (err) {
                return cb(err);
              }
              if (satisfied) {
                satisfiedEls.push(el);
              }
              cb(err);
            });
          });
        });
        async.series(seq, function(err) {
          if (err) {
            return cb(err);
          }
          cb(err, satisfiedEls.length > 0, satisfiedEls);
        });
      });
    });
    commands.waitFor.apply(this, [{
      asserter: wrappedAsserter,
      timeout: opts.timeout,
      pollFreq: opts.pollFreq
    }, function(err, value) {
      if (err && err.message && err.message.match(/Condition/)) {
        cb(new Error("Element condition wasn't satisfied!"));
      } else {
        cb(err, value);
      }
    }]);
  };
  commands.waitForVisible = function(using, value, timeout, pollFreq) {
    deprecator.warn('waitForVisible', 'waitForVisible has been deprecated, use waitForElement + isVisible asserter instead.');
    var cb = findCallback(arguments);
    commands.waitForElement.apply(this, [using, value, asserters.isVisible, timeout, pollFreq, function(err, isVisible) {
      if (err && err.message && err.message.match(/Element condition wasn't satisfied!/)) {
        cb(new Error("Element didn't become visible"));
      } else {
        cb(err, isVisible);
      }
    }]);
  };
  commands.takeScreenshot = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/screenshot',
      cb: callbackWithData(cb, this)
    });
  };
  commands.saveScreenshot = function() {
    var _this = this;
    var cb = findCallback(arguments);
    var fargs = utils.varargs(arguments);
    var _path = fargs.all[0];
    function buildFilePath(_path, cb) {
      if (!_path) {
        _path = tmp.tmpdir + '/';
      }
      if (_path.match(/.*\/$/)) {
        tmp.tmpName({template: 'screenshot-XXXXXX.png'}, function(err, fileName) {
          if (err) {
            return cb(err);
          }
          cb(null, path.join(_path, fileName));
        });
      } else {
        if (path.extname(_path) === '') {
          _path = _path + '.png';
        }
        cb(null, _path);
      }
    }
    buildFilePath(_path, function(err, filePath) {
      commands.takeScreenshot.apply(_this, [function(err, base64Data) {
        if (err) {
          return cb(err);
        }
        require('fs').writeFile(filePath, base64Data, 'base64', function(err) {
          if (err) {
            return cb(err);
          }
          cb(null, filePath);
        });
      }]);
    });
  };
  var addMethodsForSuffix = function(type, singular, plural) {
    if (singular) {
      commands['element' + utils.elFuncSuffix(type)] = function() {
        var args = __slice.call(arguments, 0);
        args.unshift(utils.elFuncFullType(type));
        commands.element.apply(this, args);
      };
      commands['element' + utils.elFuncSuffix(type) + 'OrNull'] = function() {
        var fargs = utils.varargs(arguments);
        var cb = fargs.callback;
        var args = fargs.all;
        args.unshift(utils.elFuncFullType(type));
        args.push(function(err, elements) {
          if (!err) {
            if (elements.length > 0) {
              cb(null, elements[0]);
            } else {
              cb(null, null);
            }
          } else {
            cb(err);
          }
        });
        commands.elements.apply(this, args);
      };
      commands['element' + utils.elFuncSuffix(type) + 'IfExists'] = function() {
        var fargs = utils.varargs(arguments);
        var cb = fargs.callback;
        var args = fargs.all;
        args.unshift(utils.elFuncFullType(type));
        args.push(function(err, elements) {
          if (!err) {
            if (elements.length > 0) {
              cb(null, elements[0]);
            } else {
              cb(null);
            }
          } else {
            cb(err);
          }
        });
        commands.elements.apply(this, args);
      };
      commands['hasElement' + utils.elFuncSuffix(type)] = function() {
        var args = __slice.call(arguments, 0);
        args.unshift(utils.elFuncFullType(type));
        commands.hasElement.apply(this, args);
      };
      commands['waitForElement' + utils.elFuncSuffix(type)] = function() {
        var args = __slice.call(arguments, 0);
        args.unshift(utils.elFuncFullType(type));
        commands.waitForElement.apply(this, args);
      };
      commands['waitForElements' + utils.elFuncSuffix(type)] = function() {
        var args = __slice.call(arguments, 0);
        args.unshift(utils.elFuncFullType(type));
        commands.waitForElements.apply(this, args);
      };
      commands['waitForVisible' + utils.elFuncSuffix(type)] = function() {
        var args = __slice.call(arguments, 0);
        args.unshift(utils.elFuncFullType(type));
        commands.waitForVisible.apply(this, args);
      };
    }
    if (plural) {
      commands['elements' + utils.elFuncSuffix(type)] = function() {
        var args = __slice.call(arguments, 0);
        args.unshift(utils.elFuncFullType(type));
        commands.elements.apply(this, args);
      };
    }
  };
  _.each(utils.elementFuncTypes, function(suffix) {
    addMethodsForSuffix(suffix, true, true);
  });
  commands.getTagName = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/name',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getAttribute = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        element = fargs.all[0],
        attrName = fargs.all[1];
    if (!element) {
      throw new Error('Missing element.');
    }
    if (!attrName) {
      throw new Error('Missing attribute name.');
    }
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/attribute/' + attrName,
      cb: callbackWithData(cb, this)
    });
  };
  commands.isDisplayed = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/displayed',
      cb: callbackWithData(cb, this)
    });
  };
  commands.displayed = commands.isDisplayed;
  commands.isEnabled = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/enabled',
      cb: callbackWithData(cb, this)
    });
  };
  commands.enabled = commands.isEnabled;
  commands.isSelected = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/selected',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getValue = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        element = fargs.all[0];
    if (!element) {
      throw new Error('Missing element.');
    }
    commands.getAttribute.apply(this, [element, 'value', cb]);
  };
  commands.clickElement = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/element/' + element + '/click',
      cb: simpleCallback(cb)
    });
  };
  commands.getComputedCss = function(element, cssProperty) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/css/' + cssProperty,
      cb: callbackWithData(cb, this)
    });
  };
  commands.getComputedCSS = commands.getComputedCss;
  commands.equalsElement = function(element, other) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/equals/' + other,
      cb: callbackWithData(cb, this)
    });
  };
  var _flick1 = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        xspeed = fargs.all[0],
        yspeed = fargs.all[1],
        swipe = fargs.all[2];
    var data = {
      xspeed: xspeed,
      yspeed: yspeed
    };
    if (swipe) {
      data.swipe = swipe;
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/touch/flick',
      data: data,
      cb: simpleCallback(cb)
    });
  };
  var _flick2 = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        element = fargs.all[0],
        xoffset = fargs.all[1],
        yoffset = fargs.all[2],
        speed = fargs.all[3];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/touch/flick',
      data: {
        element: element,
        xoffset: xoffset,
        yoffset: yoffset,
        speed: speed
      },
      cb: simpleCallback(cb)
    });
  };
  commands.flick = function() {
    var args = __slice.call(arguments, 0);
    if (args.length <= 4) {
      _flick1.apply(this, args);
    } else {
      _flick2.apply(this, args);
    }
  };
  commands.tapElement = function(element, cb) {
    this._jsonWireCall({
      method: 'POST',
      relPath: '/touch/click',
      data: {element: element.value.toString()},
      cb: simpleCallback(cb)
    });
  };
  commands.performTouchAction = function() {
    var _this = this;
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        touchAction = fargs.all[0];
    try {
      _this._jsonWireCall({
        method: 'POST',
        relPath: '/touch/perform',
        data: {actions: touchAction.toJSON()},
        cb: callbackWithData(cb, this)
      });
    } catch (err) {
      return cb(err);
    }
  };
  commands.performMultiAction = function() {
    var _this = this;
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        element = fargs.all[0],
        multiTouchAction = fargs.all[1];
    if (!multiTouchAction) {
      multiTouchAction = element;
      element = null;
    }
    element = element || multiTouchAction.element;
    try {
      var data = multiTouchAction.toJSON(element);
      if (element) {
        data.elementId = element.value.toString();
      }
      _this._jsonWireCall({
        method: 'POST',
        relPath: '/touch/multi/perform',
        data: data,
        cb: callbackWithData(cb, this)
      });
    } catch (err) {
      return cb(err);
    }
  };
  commands.moveTo = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        element = fargs.all[0],
        xoffset = fargs.all[1],
        yoffset = fargs.all[2];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/moveto',
      data: {
        element: element ? element.toString() : null,
        xoffset: xoffset,
        yoffset: yoffset
      },
      cb: simpleCallback(cb)
    });
  };
  commands.buttonDown = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        button = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/buttondown',
      data: {button: button},
      cb: simpleCallback(cb)
    });
  };
  commands.buttonUp = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        button = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/buttonup',
      data: {button: button},
      cb: simpleCallback(cb)
    });
  };
  commands.click = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        button = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/click',
      data: {button: button},
      cb: simpleCallback(cb)
    });
  };
  commands.doubleclick = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/doubleclick',
      cb: simpleCallback(cb)
    });
  };
  commands.type = function(element, keys) {
    var cb = findCallback(arguments);
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    _.each(keys, function(key, idx) {
      if (typeof key !== "string") {
        keys[idx] = key.toString();
      }
    });
    this._jsonWireCall({
      method: 'POST',
      relPath: '/element/' + element + '/value',
      data: {value: keys},
      cb: simpleCallback(cb)
    });
  };
  commands.replace = function(element, keys) {
    var cb = findCallback(arguments);
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    _.each(keys, function(key, idx) {
      if (typeof key !== "string") {
        keys[idx] = key.toString();
      }
    });
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/element/' + element + '/replace_value',
      data: {value: keys},
      cb: simpleCallback(cb)
    });
  };
  commands.submit = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/element/' + element + '/submit',
      cb: simpleCallback(cb)
    });
  };
  commands.keys = function(keys) {
    var cb = findCallback(arguments);
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    _.each(keys, function(key, idx) {
      if (typeof key !== "string") {
        keys[idx] = key.toString();
      }
    });
    this._jsonWireCall({
      method: 'POST',
      relPath: '/keys',
      data: {value: keys},
      cb: simpleCallback(cb)
    });
  };
  commands.clear = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/element/' + element + '/clear',
      cb: simpleCallback(cb)
    });
  };
  commands.title = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/title',
      cb: callbackWithData(cb, this)
    });
  };
  commands.source = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/source',
      cb: callbackWithData(cb, this)
    });
  };
  var _rawText = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/text',
      cb: callbackWithData(cb, this)
    });
  };
  commands.text = function() {
    var cb = findCallback(arguments);
    var fargs = utils.varargs(arguments);
    var element = fargs.all[0];
    var _this = this;
    if (!element || element === 'body') {
      commands.element.apply(this, ['tag name', 'body', function(err, bodyEl) {
        if (!err) {
          _rawText.apply(_this, [bodyEl, cb]);
        } else {
          cb(err);
        }
      }]);
    } else {
      _rawText.apply(_this, [element, cb]);
    }
  };
  commands.textPresent = function(searchText, element) {
    var cb = findCallback(arguments);
    commands.text.apply(this, [element, function(err, text) {
      if (err) {
        cb(err, null);
      } else {
        cb(err, text.indexOf(searchText) >= 0);
      }
    }]);
  };
  commands.alertText = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/alert_text',
      cb: callbackWithData(cb, this)
    });
  };
  commands.alertKeys = function(keys) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/alert_text',
      data: {text: keys},
      cb: simpleCallback(cb)
    });
  };
  commands.acceptAlert = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/accept_alert',
      cb: simpleCallback(cb)
    });
  };
  commands.dismissAlert = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/dismiss_alert',
      cb: simpleCallback(cb)
    });
  };
  commands.active = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/element/active',
      cb: callbackWithData(cb, this)
    });
  };
  commands.url = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/url',
      cb: callbackWithData(cb, this)
    });
  };
  commands.allCookies = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/cookie',
      cb: callbackWithData(cb, this)
    });
  };
  commands.setCookie = function(cookie) {
    var cb = findCallback(arguments);
    if (cookie) {
      cookie.secure = cookie.secure || false;
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/cookie',
      data: {cookie: cookie},
      cb: simpleCallback(cb)
    });
  };
  commands.deleteAllCookies = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'DELETE',
      relPath: '/cookie',
      cb: simpleCallback(cb)
    });
  };
  commands.deleteCookie = function(name) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'DELETE',
      relPath: '/cookie/' + encodeURIComponent(name),
      cb: simpleCallback(cb)
    });
  };
  commands.getOrientation = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/orientation',
      cb: callbackWithData(cb, this)
    });
  };
  commands.setOrientation = function(orientation) {
    orientation = orientation.toUpperCase();
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/orientation',
      data: {orientation: orientation},
      cb: simpleCallback(cb)
    });
  };
  commands.setLocalStorageKey = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        key = fargs.all[0],
        value = fargs.all[1];
    commands.safeExecute.apply(this, ["localStorage.setItem(arguments[0], arguments[1])", [key, value], cb]);
  };
  commands.getLocalStorageKey = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        key = fargs.all[0];
    commands.safeEval.apply(this, ["localStorage.getItem('" + key + "')", cb]);
  };
  commands.removeLocalStorageKey = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        key = fargs.all[0];
    commands.safeExecute.apply(this, ["localStorage.removeItem(arguments[0])", [key], cb]);
  };
  commands.clearLocalStorage = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    commands.safeExecute.apply(this, ["localStorage.clear()", cb]);
  };
  var _isVisible1 = function(element) {
    var cb = findCallback(arguments);
    commands.getComputedCSS.apply(this, [element, "display", function(err, display) {
      if (err) {
        return cb(err);
      }
      cb(null, display !== "none");
    }]);
  };
  var _isVisible2 = function(queryType, querySelector) {
    var cb = findCallback(arguments);
    commands.elementIfExists.apply(this, [queryType, querySelector, function(err, element) {
      if (err) {
        return cb(err);
      }
      if (element) {
        element.isVisible(cb);
      } else {
        cb(null, false);
      }
    }]);
  };
  commands.isVisible = function() {
    deprecator.warn('isVisible', 'isVisible has been deprecated, use isDisplayed instead.');
    var args = __slice.call(arguments, 0);
    if (args.length <= 2) {
      _isVisible1.apply(this, args);
    } else {
      _isVisible2.apply(this, args);
    }
  };
  commands.getPageIndex = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/pageIndex',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getLocation = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/location',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getLocationInView = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/location_in_view',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getSize = function(element) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/element/' + element + '/size',
      cb: callbackWithData(cb, this)
    });
  };
  commands.uploadFile = function(filepath) {
    var cb = findCallback(arguments);
    var _this = this;
    var archiver = require('archiver');
    var archive = archiver('zip');
    var dataList = [];
    archive.on('error', function(err) {
      cb(err);
    }).on('data', function(data) {
      dataList.push(data);
    }).on('end', function() {
      _this._jsonWireCall({
        method: 'POST',
        relPath: '/file',
        data: {file: Buffer.concat(dataList).toString('base64')},
        cb: callbackWithData(cb, _this)
      });
    });
    archive.append(fs.createReadStream(filepath), {name: path.basename(filepath)});
    archive.finalize(function(err) {
      if (err) {
        cb(err);
      }
    });
  };
  commands.waitForJsCondition = function() {
    deprecator.warn('waitForJsCondition', 'waitForJsCondition has been deprecated, use waitFor + jsCondition asserter instead.');
    var cb = findCallback(arguments);
    var fargs = utils.varargs(arguments);
    var jsConditionExpr = fargs.all[0],
        timeout = fargs.all[1],
        pollFreq = fargs.all[2];
    commands.waitFor.apply(this, [{
      asserter: asserters.jsCondition(jsConditionExpr, true),
      timeout: timeout,
      pollFreq: pollFreq
    }, function(err, value) {
      if (err && err.message && err.message.match(/Condition/)) {
        cb(new Error("Element condition wasn't satisfied!"));
      } else {
        cb(err, value);
      }
    }]);
  };
  commands.waitForCondition = commands.waitForJsCondition;
  commands.waitForConditionInBrowser = function() {
    var _this = this;
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        conditionExpr = fargs.all[0],
        timeout = fargs.all[1] || 1000,
        poll = fargs.all[2] || 100;
    commands.safeExecuteAsync.apply(_this, [_waitForConditionInBrowserJsScript, [conditionExpr, timeout, poll], function(err, res) {
      if (err) {
        return cb(err);
      }
      if (res !== true) {
        return cb("waitForConditionInBrowser failure for: " + conditionExpr);
      }
      cb(null, res);
    }]);
  };
  commands.sauceJobUpdate = function() {
    var fargs = utils.varargs(arguments);
    this._sauceJobUpdate.apply(this, fargs.array);
  };
  commands.sauceJobStatus = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        hasPassed = fargs.all[0];
    this._sauceJobUpdate.apply(this, [{passed: hasPassed}, cb]);
  };
  commands.sleep = function(ms, cb) {
    cb = cb || function() {};
    setTimeout(cb, ms);
  };
  commands.noop = function(cb) {
    if (cb) {
      cb();
    }
  };
  commands.shakeDevice = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/shake',
      cb: simpleCallback(cb)
    });
  };
  commands.shake = commands.shakeDevice;
  commands.lockDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        seconds = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/lock',
      data: {seconds: seconds},
      cb: simpleCallback(cb)
    });
  };
  commands.lock = commands.lockDevice;
  commands.unlockDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/unlock',
      cb: simpleCallback(cb)
    });
  };
  commands.unlock = commands.unlockDevice;
  commands.isLocked = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/is_locked',
      cb: callbackWithData(cb)
    });
  };
  commands.deviceKeyEvent = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        keycode = fargs.all[0],
        metastate = fargs.all[1];
    var data = {keycode: keycode};
    if (metastate) {
      data.metastate = metastate;
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/keyevent',
      data: data,
      cb: simpleCallback(cb)
    });
  };
  commands.pressDeviceKey = commands.deviceKeyEvent;
  commands.pressKeycode = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        keycode = fargs.all[0],
        metastate = fargs.all[1];
    var data = {keycode: keycode};
    if (metastate) {
      data.metastate = metastate;
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/press_keycode',
      data: data,
      cb: simpleCallback(cb)
    });
  };
  commands.rotateDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        element = fargs.all[0],
        opts = fargs.all[1];
    if (!(element && element.value)) {
      opts = element;
      element = null;
    }
    var data = _.clone(opts);
    if (element) {
      data.element = element.value.toString();
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/rotate',
      data: data,
      cb: simpleCallback(cb)
    });
  };
  commands.rotate = commands.rotateDevice;
  commands.getCurrentDeviceActivity = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/appium/device/current_activity',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getCurrentActivity = commands.getCurrentDeviceActivity;
  commands.getCurrentPackage = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/appium/device/current_package',
      cb: callbackWithData(cb, this)
    });
  };
  commands.installAppOnDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        appPath = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/install_app',
      data: {appPath: appPath},
      cb: simpleCallback(cb)
    });
  };
  commands.installApp = commands.installAppOnDevice;
  commands.removeAppFromDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        appId = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/remove_app',
      data: {appId: appId},
      cb: simpleCallback(cb)
    });
  };
  commands.removeApp = commands.removeAppFromDevice;
  commands.isAppInstalledOnDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        bundleId = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/app_installed',
      data: {bundleId: bundleId},
      cb: callbackWithData(cb, this)
    });
  };
  commands.isAppInstalled = commands.isAppInstalledOnDevice;
  commands.hideDeviceKeyboard = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    var data = {};
    switch (typeof fargs.all[0]) {
      case 'string':
        data = {keyName: fargs.all[0]};
        break;
      case 'object':
        data = fargs.all[0];
        break;
      default:
        data = null;
    }
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/hide_keyboard',
      data: data,
      cb: simpleCallback(cb)
    });
  };
  commands.hideKeyboard = commands.hideDeviceKeyboard;
  commands.pushFileToDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        pathOnDevice = fargs.all[0],
        base64Data = fargs.all[1];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/push_file',
      data: {
        path: pathOnDevice,
        data: base64Data
      },
      cb: simpleCallback(cb)
    });
  };
  commands.pushFile = commands.pushFileToDevice;
  commands.pullFileFromDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        pathOnDevice = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/pull_file',
      data: {path: pathOnDevice},
      cb: callbackWithData(cb, this)
    });
  };
  commands.pullFile = commands.pullFileFromDevice;
  commands.pullFolderFromDevice = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        pathOnDevice = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/pull_folder',
      data: {path: pathOnDevice},
      cb: callbackWithData(cb, this)
    });
  };
  commands.pullFolder = commands.pullFolderFromDevice;
  commands.toggleAirplaneModeOnDevice = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/toggle_airplane_mode',
      cb: simpleCallback(cb)
    });
  };
  commands.toggleAirplaneMode = commands.toggleAirplaneModeOnDevice;
  commands.toggleFlightMode = commands.toggleAirplaneModeOnDevice;
  commands.toggleWiFiOnDevice = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/toggle_wifi',
      cb: simpleCallback(cb)
    });
  };
  commands.toggleWiFi = commands.toggleWiFiOnDevice;
  commands.toggleLocationServicesOnDevice = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/toggle_location_services',
      cb: simpleCallback(cb)
    });
  };
  commands.toggleLocationServices = commands.toggleLocationServicesOnDevice;
  commands.toggleDataOnDevice = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/toggle_data',
      cb: simpleCallback(cb)
    });
  };
  commands.toggleData = commands.toggleDataOnDevice;
  commands.launchApp = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/launch',
      cb: simpleCallback(cb)
    });
  };
  commands.closeApp = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/close',
      cb: simpleCallback(cb)
    });
  };
  commands.resetApp = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/reset',
      cb: simpleCallback(cb)
    });
  };
  commands.backgroundApp = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        seconds = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/background',
      data: {seconds: seconds},
      cb: simpleCallback(cb)
    });
  };
  commands.endTestCoverageForApp = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        intent = fargs.all[0],
        path = fargs.all[1];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/end_test_coverage',
      data: {
        intent: intent,
        path: path
      },
      cb: callbackWithData(cb, this)
    });
  };
  commands.endTestCoverage = commands.endTestCoverageForApp;
  commands.endCoverage = commands.endTestCoverageForApp;
  commands.complexFindInApp = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        selector = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/complex_find',
      data: {selector: selector},
      cb: elementOrElementsCallback(cb, this)
    });
  };
  commands.complexFind = commands.complexFindInApp;
  commands.getAppStrings = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        language = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/app/strings',
      data: {language: language},
      cb: callbackWithData(cb, this)
    });
  };
  commands.setImmediateValueInApp = function(element, value) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/element/' + element.value.toString() + '/value',
      data: {value: value},
      cb: simpleCallback(cb)
    });
  };
  commands.startActivity = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        options = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/start_activity',
      data: options,
      cb: simpleCallback(cb)
    });
  };
  commands.setImmediateValue = commands.setImmediateValueInApp;
  commands.setNetworkConnection = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    this._jsonWireCall({
      method: 'POST',
      relPath: '/network_connection',
      data: {parameters: {type: fargs.all[0]}},
      cb: callbackWithData(cb, this)
    });
  };
  commands.getNetworkConnection = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/network_connection',
      cb: callbackWithData(cb, this)
    });
  };
  commands.openNotifications = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/device/open_notifications',
      cb: simpleCallback(cb, this)
    });
  };
  commands.settings = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/appium/settings',
      cb: callbackWithData(cb, this)
    });
  };
  commands.updateSettings = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/settings',
      data: {settings: fargs.all[0]},
      cb: simpleCallback(cb, this)
    });
  };
  commands.availableIMEEngines = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/ime/available_engines',
      cb: callbackWithData(cb, this)
    });
  };
  commands.activateIMEEngine = function(engine) {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/ime/activate',
      data: {engine: engine},
      cb: simpleCallback(cb, this)
    });
  };
  commands.deactivateIMEEngine = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'POST',
      relPath: '/ime/deactivate',
      cb: simpleCallback(cb, this)
    });
  };
  commands.isIMEActive = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/ime/activated',
      cb: callbackWithData(cb, this)
    });
  };
  commands.activeIMEEngine = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/ime/active_engine',
      cb: callbackWithData(cb, this)
    });
  };
  commands.getDeviceTime = function() {
    var cb = findCallback(arguments);
    this._jsonWireCall({
      method: 'GET',
      relPath: '/appium/device/system_time',
      cb: callbackWithData(cb, this)
    });
  };
  commands.touchId = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback,
        match = fargs.all[0];
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/simulator/touch_id',
      cb: callbackWithData(cb, this),
      data: {match: match}
    });
  };
  commands.toggleTouchIdEnrollment = function() {
    var fargs = utils.varargs(arguments);
    var cb = fargs.callback;
    this._jsonWireCall({
      method: 'POST',
      relPath: '/appium/simulator/toggle_touch_id_enrollment',
      cb: callbackWithData(cb, this)
    });
  };
  module.exports = commands;
})(require('buffer').Buffer);
