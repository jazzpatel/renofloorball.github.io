/* */ 
(function(Buffer) {
  var Stream = require('stream').Stream;
  var PassThrough = require('readable-stream').PassThrough;
  var util = module.exports = {};
  util.isStream = function(source) {
    return source instanceof Stream;
  };
  util.normalizeInputSource = function(source) {
    if (source === null) {
      return new Buffer(0);
    } else if (typeof source === 'string') {
      return new Buffer(source);
    } else if (util.isStream(source) && !source._readableState) {
      var normalized = new PassThrough();
      source.pipe(normalized);
      return normalized;
    }
    return source;
  };
})(require('buffer').Buffer);
