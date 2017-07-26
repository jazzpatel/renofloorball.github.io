/* */ 
(function(process) {
  var fs = require('graceful-fs');
  var path = require('path');
  var _ = require('lodash');
  var glob = require('glob');
  var file = module.exports = {};
  var pathSeparatorRe = /[\/\\]/g;
  var processPatterns = function(patterns, fn) {
    var result = [];
    _.flatten(patterns).forEach(function(pattern) {
      var exclusion = pattern.indexOf('!') === 0;
      if (exclusion) {
        pattern = pattern.slice(1);
      }
      var matches = fn(pattern);
      if (exclusion) {
        result = _.difference(result, matches);
      } else {
        result = _.union(result, matches);
      }
    });
    return result;
  };
  file.exists = function() {
    var filepath = path.join.apply(path, arguments);
    return fs.existsSync(filepath);
  };
  file.expand = function() {
    var args = _.toArray(arguments);
    var options = _.isPlainObject(args[0]) ? args.shift() : {};
    var patterns = Array.isArray(args[0]) ? args[0] : args;
    if (patterns.length === 0) {
      return [];
    }
    var matches = processPatterns(patterns, function(pattern) {
      return glob.sync(pattern, options);
    });
    if (options.filter) {
      matches = matches.filter(function(filepath) {
        filepath = path.join(options.cwd || '', filepath);
        try {
          if (typeof options.filter === 'function') {
            return options.filter(filepath);
          } else {
            return fs.statSync(filepath)[options.filter]();
          }
        } catch (e) {
          return false;
        }
      });
    }
    return matches;
  };
  file.expandMapping = function(patterns, destBase, options) {
    options = _.defaults({}, options, {rename: function(destBase, destPath) {
        return path.join(destBase || '', destPath);
      }});
    var files = [];
    var fileByDest = {};
    file.expand(options, patterns).forEach(function(src) {
      var destPath = src;
      if (options.flatten) {
        destPath = path.basename(destPath);
      }
      if (options.ext) {
        destPath = destPath.replace(/(\.[^\/]*)?$/, options.ext);
      }
      var dest = options.rename(destBase, destPath, options);
      if (options.cwd) {
        src = path.join(options.cwd, src);
      }
      dest = dest.replace(pathSeparatorRe, '/');
      src = src.replace(pathSeparatorRe, '/');
      if (fileByDest[dest]) {
        fileByDest[dest].src.push(src);
      } else {
        files.push({
          src: [src],
          dest: dest
        });
        fileByDest[dest] = files[files.length - 1];
      }
    });
    return files;
  };
  file.normalizeFilesArray = function(data) {
    var files = [];
    data.forEach(function(obj) {
      var prop;
      if ('src' in obj || 'dest' in obj) {
        files.push(obj);
      }
    });
    if (files.length === 0) {
      return [];
    }
    files = _(files).chain().forEach(function(obj) {
      if (!('src' in obj) || !obj.src) {
        return;
      }
      if (Array.isArray(obj.src)) {
        obj.src = _.flatten(obj.src);
      } else {
        obj.src = [obj.src];
      }
    }).map(function(obj) {
      var expandOptions = _.extend({}, obj);
      delete expandOptions.src;
      delete expandOptions.dest;
      if (obj.expand) {
        return file.expandMapping(obj.src, obj.dest, expandOptions).map(function(mapObj) {
          var result = _.extend({}, obj);
          result.orig = _.extend({}, obj);
          result.src = mapObj.src;
          result.dest = mapObj.dest;
          ['expand', 'cwd', 'flatten', 'rename', 'ext'].forEach(function(prop) {
            delete result[prop];
          });
          return result;
        });
      }
      var result = _.extend({}, obj);
      result.orig = _.extend({}, obj);
      if ('src' in result) {
        Object.defineProperty(result, 'src', {
          enumerable: true,
          get: function fn() {
            var src;
            if (!('result' in fn)) {
              src = obj.src;
              src = Array.isArray(src) ? _.flatten(src) : [src];
              fn.result = file.expand(expandOptions, src);
            }
            return fn.result;
          }
        });
      }
      if ('dest' in result) {
        result.dest = obj.dest;
      }
      return result;
    }).flatten().value();
    return files;
  };
})(require('process'));
