/* */ 
(function(process) {
  var fs = require('fs'),
      path = require('path'),
      os = require('os'),
      utils = require('./utils');
  function _isUndefined(obj) {
    return typeof obj === 'undefined';
  }
  function _parseArguments() {
    var fargs = utils.varargs(arguments);
    var callback = fargs.callback;
    var options = fargs.all[0];
    return [options, callback];
  }
  function _getTMPDir() {
    var tmpNames = ['TMPDIR', 'TMP', 'TEMP'];
    for (var i = 0,
        length = tmpNames.length; i < length; i++) {
      if (_isUndefined(process.env[tmpNames[i]])) {
        continue;
      }
      return process.env[tmpNames[i]];
    }
    return '/tmp';
  }
  var exists = fs.exists || path.exists,
      tmpDir = os.tmpdir || os.tmpDir || _getTMPDir,
      _TMP = tmpDir(),
      randomChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
      randomCharsLength = randomChars.length;
  function _getTmpName(options, callback) {
    var args = _parseArguments(options, callback),
        opts = args[0],
        cb = args[1],
        template = opts.template,
        templateDefined = !_isUndefined(template),
        tries = opts.tries || 3;
    if (isNaN(tries) || tries < 0) {
      return cb(new Error('Invalid tries'));
    }
    if (templateDefined && !template.match(/XXXXXX/)) {
      return cb(new Error('Invalid template provided'));
    }
    function _getName() {
      if (!templateDefined) {
        var name = [(_isUndefined(opts.prefix)) ? 'tmp-' : opts.prefix, process.pid, (Math.random() * 0x1000000000).toString(36), opts.postfix].join('');
        return path.join(opts.dir || _TMP, name);
      }
      var chars = [];
      for (var i = 0; i < 6; i++) {
        chars.push(randomChars.substr(Math.floor(Math.random() * randomCharsLength), 1));
      }
      return template.replace(/XXXXXX/, chars.join(''));
    }
    (function _getUniqueName() {
      var name = _getName();
      exists(name, function _pathExists(pathExists) {
        if (pathExists) {
          if (tries-- > 0) {
            return _getUniqueName();
          }
          return cb(new Error('Could not get a unique tmp filename, max tries reached'));
        }
        cb(null, name);
      });
    }());
  }
  module.exports.tmpdir = _TMP;
  module.exports.tmpName = _getTmpName;
})(require('process'));
