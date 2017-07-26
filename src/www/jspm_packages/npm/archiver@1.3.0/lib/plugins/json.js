/* */ 
(function(Buffer) {
  var inherits = require('util').inherits;
  var Transform = require('readable-stream').Transform;
  var crc32 = require('buffer-crc32');
  var util = require('archiver-utils');
  var Json = function(options) {
    if (!(this instanceof Json)) {
      return new Json(options);
    }
    options = this.options = util.defaults(options, {});
    Transform.call(this, options);
    this.supports = {directory: true};
    this.files = [];
  };
  inherits(Json, Transform);
  Json.prototype._transform = function(chunk, encoding, callback) {
    callback(null, chunk);
  };
  Json.prototype._writeStringified = function() {
    var fileString = JSON.stringify(this.files);
    this.write(fileString);
  };
  Json.prototype.append = function(source, data, callback) {
    var self = this;
    data.crc32 = 0;
    function onend(err, sourceBuffer) {
      if (err) {
        callback(err);
        return;
      }
      data.size = sourceBuffer.length || 0;
      data.crc32 = crc32.unsigned(sourceBuffer);
      self.files.push(data);
      callback(null, data);
    }
    if (data.sourceType === 'buffer') {
      onend(null, source);
    } else if (data.sourceType === 'stream') {
      util.collectStream(source, onend);
    }
  };
  Json.prototype.finalize = function() {
    this._writeStringified();
    this.end();
  };
  module.exports = Json;
})(require('buffer').Buffer);
