/* */ 
(function(process) {
  var async = require('async');
  var _ = require('./lodash');
  var deprecatedChain = {};
  deprecatedChain.chain = function(obj) {
    var _this = this;
    if (!obj) {
      obj = {};
    }
    if (obj.onError) {
      this._chainOnErrorCallback = obj.onError;
    } else if (!this._chainOnErrorCallback) {
      this._chainOnErrorCallback = function(err) {
        if (err) {
          console.error("a function in your .chain() failed:", err);
        }
      };
    }
    if (!_this._queue) {
      _this._queue = async.queue(function(task, callback) {
        if (task.args.length > 0 && typeof task.args[task.args.length - 1] === "function") {
          var cb_arg = (task.name === 'queueAddAsync' ? 1 : task.args.length - 1);
          var func = task.args[cb_arg];
          task.args[cb_arg] = function(err) {
            if (func) {
              func.apply(null, arguments);
            }
            if (!_this._chainHalted) {
              callback(err);
            }
          };
        } else {
          task.args.push(function(err) {
            if (err) {
              _this._chainOnErrorCallback(err);
            } else {
              callback();
            }
          });
        }
        _this[task.name].apply(_this, task.args);
      }, 1);
      _this._queue = _.extend(_this._queue, {unshift: function(data, callback) {
          var _this = this;
          if (data.constructor !== Array) {
            data = [data];
          }
          data.forEach(function(task) {
            _this.tasks.unshift({
              data: task,
              callback: typeof callback === 'function' ? callback : null
            });
            if (_this.saturated && _this.tasks.length === _this.concurrency) {
              _this.saturated();
            }
            async.nextTick(_this.process);
          });
        }});
    }
    var chain = {};
    var buildPlaceholder = function(name) {
      return function() {
        _this._queue.push({
          name: name,
          args: Array.prototype.slice.call(arguments, 0)
        });
        return chain;
      };
    };
    _.each(_.functionsIn(_this), function(k) {
      if (k !== "chain") {
        chain[k] = buildPlaceholder(k);
      }
    });
    return chain;
  };
  deprecatedChain.haltChain = function() {
    this._chainHalted = true;
    this._queue = null;
  };
  deprecatedChain.pauseChain = function(timeoutMs, cb) {
    setTimeout(function() {
      cb();
    }, timeoutMs);
    return this.chain;
  };
  deprecatedChain.next = function() {
    this._queue.unshift({
      name: arguments[0],
      args: _.drop(arguments)
    });
  };
  deprecatedChain.queueAdd = function(func) {
    func();
    return this.chain;
  };
  deprecatedChain.queueAddAsync = function(func, cb) {
    func(cb);
    return this.chain;
  };
  module.exports = {patch: function(browser) {
      _(deprecatedChain).methods().each(function(methodName) {
        browser[methodName] = deprecatedChain[methodName].bind(browser);
      });
    }};
})(require('process'));
