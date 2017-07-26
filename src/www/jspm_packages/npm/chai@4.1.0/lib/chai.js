/* */ 
var used = [];
exports.version = '4.1.0';
exports.AssertionError = require('assertion-error');
var util = require('./chai/utils/index');
exports.use = function(fn) {
  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }
  return exports;
};
exports.util = util;
var config = require('./chai/config');
exports.config = config;
var assertion = require('./chai/assertion');
exports.use(assertion);
var core = require('./chai/core/assertions');
exports.use(core);
var expect = require('./chai/interface/expect');
exports.use(expect);
var should = require('./chai/interface/should');
exports.use(should);
var assert = require('./chai/interface/assert');
exports.use(assert);
