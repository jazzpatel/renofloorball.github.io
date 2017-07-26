/* */ 
(function(Buffer, process) {
  var inherits = require('util').inherits;
  var crc32 = require('buffer-crc32');
  var CRC32Stream = require('crc32-stream');
  var DeflateCRC32Stream = CRC32Stream.DeflateCRC32Stream;
  var ArchiveOutputStream = require('../archive-output-stream');
  var ZipArchiveEntry = require('./zip-archive-entry');
  var GeneralPurposeBit = require('./general-purpose-bit');
  var constants = require('./constants');
  var util = require('../../util/index');
  var zipUtil = require('./util');
  var ZipArchiveOutputStream = module.exports = function(options) {
    if (!(this instanceof ZipArchiveOutputStream)) {
      return new ZipArchiveOutputStream(options);
    }
    options = this.options = this._defaults(options);
    ArchiveOutputStream.call(this, options);
    this._entry = null;
    this._entries = [];
    this._archive = {
      centralLength: 0,
      centralOffset: 0,
      comment: '',
      finish: false,
      finished: false,
      processing: false,
      forceZip64: options.forceZip64,
      forceLocalTime: options.forceLocalTime
    };
  };
  inherits(ZipArchiveOutputStream, ArchiveOutputStream);
  ZipArchiveOutputStream.prototype._afterAppend = function(ae) {
    this._entries.push(ae);
    if (ae.getGeneralPurposeBit().usesDataDescriptor()) {
      this._writeDataDescriptor(ae);
    }
    this._archive.processing = false;
    this._entry = null;
    if (this._archive.finish && !this._archive.finished) {
      this._finish();
    }
  };
  ZipArchiveOutputStream.prototype._appendBuffer = function(ae, source, callback) {
    if (source.length === 0) {
      ae.setMethod(constants.METHOD_STORED);
    }
    var method = ae.getMethod();
    if (method === constants.METHOD_STORED) {
      ae.setSize(source.length);
      ae.setCompressedSize(source.length);
      ae.setCrc(crc32.unsigned(source));
    }
    this._writeLocalFileHeader(ae);
    if (method === constants.METHOD_STORED) {
      this.write(source);
      this._afterAppend(ae);
      callback(null, ae);
      return;
    } else if (method === constants.METHOD_DEFLATED) {
      this._smartStream(ae, callback).end(source);
      return;
    } else {
      callback(new Error('compression method ' + method + ' not implemented'));
      return;
    }
  };
  ZipArchiveOutputStream.prototype._appendStream = function(ae, source, callback) {
    ae.getGeneralPurposeBit().useDataDescriptor(true);
    ae.setVersionNeededToExtract(constants.MIN_VERSION_DATA_DESCRIPTOR);
    this._writeLocalFileHeader(ae);
    var smart = this._smartStream(ae, callback);
    source.once('error', function(err) {
      smart.emit('error', err);
      smart.end();
    });
    source.pipe(smart);
  };
  ZipArchiveOutputStream.prototype._defaults = function(o) {
    if (typeof o !== 'object') {
      o = {};
    }
    if (typeof o.zlib !== 'object') {
      o.zlib = {};
    }
    if (typeof o.zlib.level !== 'number') {
      o.zlib.level = constants.ZLIB_BEST_SPEED;
    }
    o.forceZip64 = !!o.forceZip64;
    o.forceLocalTime = !!o.forceLocalTime;
    return o;
  };
  ZipArchiveOutputStream.prototype._finish = function() {
    this._archive.centralOffset = this.offset;
    this._entries.forEach(function(ae) {
      this._writeCentralFileHeader(ae);
    }.bind(this));
    this._archive.centralLength = this.offset - this._archive.centralOffset;
    if (this.isZip64()) {
      this._writeCentralDirectoryZip64();
    }
    this._writeCentralDirectoryEnd();
    this._archive.processing = false;
    this._archive.finish = true;
    this._archive.finished = true;
    this.end();
  };
  ZipArchiveOutputStream.prototype._normalizeEntry = function(ae) {
    if (ae.getMethod() === -1) {
      ae.setMethod(constants.METHOD_DEFLATED);
    }
    if (ae.getMethod() === constants.METHOD_DEFLATED) {
      ae.getGeneralPurposeBit().useDataDescriptor(true);
      ae.setVersionNeededToExtract(constants.MIN_VERSION_DATA_DESCRIPTOR);
    }
    if (ae.getTime() === -1) {
      ae.setTime(new Date(), this._archive.forceLocalTime);
    }
    ae._offsets = {
      file: 0,
      data: 0,
      contents: 0
    };
  };
  ZipArchiveOutputStream.prototype._smartStream = function(ae, callback) {
    var deflate = ae.getMethod() === constants.METHOD_DEFLATED;
    var process = deflate ? new DeflateCRC32Stream(this.options.zlib) : new CRC32Stream();
    var error = null;
    function handleStuff() {
      var digest = process.digest().readUInt32BE(0);
      ae.setCrc(digest);
      ae.setSize(process.size());
      ae.setCompressedSize(process.size(true));
      this._afterAppend(ae);
      callback(error, ae);
    }
    process.once('end', handleStuff.bind(this));
    process.once('error', function(err) {
      error = err;
    });
    process.pipe(this, {end: false});
    return process;
  };
  ZipArchiveOutputStream.prototype._writeCentralDirectoryEnd = function() {
    var records = this._entries.length;
    var size = this._archive.centralLength;
    var offset = this._archive.centralOffset;
    if (this.isZip64()) {
      records = constants.ZIP64_MAGIC_SHORT;
      size = constants.ZIP64_MAGIC;
      offset = constants.ZIP64_MAGIC;
    }
    this.write(zipUtil.getLongBytes(constants.SIG_EOCD));
    this.write(constants.SHORT_ZERO);
    this.write(constants.SHORT_ZERO);
    this.write(zipUtil.getShortBytes(records));
    this.write(zipUtil.getShortBytes(records));
    this.write(zipUtil.getLongBytes(size));
    this.write(zipUtil.getLongBytes(offset));
    var comment = this.getComment();
    var commentLength = Buffer.byteLength(comment);
    this.write(zipUtil.getShortBytes(commentLength));
    this.write(comment);
  };
  ZipArchiveOutputStream.prototype._writeCentralDirectoryZip64 = function() {
    this.write(zipUtil.getLongBytes(constants.SIG_ZIP64_EOCD));
    this.write(zipUtil.getEightBytes(56));
    this.write(zipUtil.getShortBytes(constants.MIN_VERSION_ZIP64));
    this.write(zipUtil.getShortBytes(constants.MIN_VERSION_ZIP64));
    this.write(constants.LONG_ZERO);
    this.write(constants.LONG_ZERO);
    this.write(zipUtil.getEightBytes(this._entries.length));
    this.write(zipUtil.getEightBytes(this._entries.length));
    this.write(zipUtil.getEightBytes(this._archive.centralLength));
    this.write(zipUtil.getEightBytes(this._archive.centralOffset));
    this.write(zipUtil.getLongBytes(constants.SIG_ZIP64_EOCD_LOC));
    this.write(constants.LONG_ZERO);
    this.write(zipUtil.getEightBytes(this._archive.centralOffset + this._archive.centralLength));
    this.write(zipUtil.getLongBytes(1));
  };
  ZipArchiveOutputStream.prototype._writeCentralFileHeader = function(ae) {
    var gpb = ae.getGeneralPurposeBit();
    var method = ae.getMethod();
    var offsets = ae._offsets;
    var size = ae.getSize();
    var compressedSize = ae.getCompressedSize();
    if (ae.isZip64() || offsets.file > constants.ZIP64_MAGIC) {
      size = constants.ZIP64_MAGIC;
      compressedSize = constants.ZIP64_MAGIC;
      ae.setVersionNeededToExtract(constants.MIN_VERSION_ZIP64);
      var extraBuf = Buffer.concat([zipUtil.getShortBytes(constants.ZIP64_EXTRA_ID), zipUtil.getShortBytes(24), zipUtil.getEightBytes(ae.getSize()), zipUtil.getEightBytes(ae.getCompressedSize()), zipUtil.getEightBytes(offsets.file)], 28);
      ae.setExtra(extraBuf);
    }
    this.write(zipUtil.getLongBytes(constants.SIG_CFH));
    this.write(zipUtil.getShortBytes((ae.getPlatform() << 8) | constants.VERSION_MADEBY));
    this.write(zipUtil.getShortBytes(ae.getVersionNeededToExtract()));
    this.write(gpb.encode());
    this.write(zipUtil.getShortBytes(method));
    this.write(zipUtil.getLongBytes(ae.getTimeDos()));
    this.write(zipUtil.getLongBytes(ae.getCrc()));
    this.write(zipUtil.getLongBytes(compressedSize));
    this.write(zipUtil.getLongBytes(size));
    var name = ae.getName();
    var comment = ae.getComment();
    var extra = ae.getCentralDirectoryExtra();
    if (gpb.usesUTF8ForNames()) {
      name = new Buffer(name);
      comment = new Buffer(comment);
    }
    this.write(zipUtil.getShortBytes(name.length));
    this.write(zipUtil.getShortBytes(extra.length));
    this.write(zipUtil.getShortBytes(comment.length));
    this.write(constants.SHORT_ZERO);
    this.write(zipUtil.getShortBytes(ae.getInternalAttributes()));
    this.write(zipUtil.getLongBytes(ae.getExternalAttributes()));
    if (offsets.file > constants.ZIP64_MAGIC) {
      this.write(zipUtil.getLongBytes(constants.ZIP64_MAGIC));
    } else {
      this.write(zipUtil.getLongBytes(offsets.file));
    }
    this.write(name);
    this.write(extra);
    this.write(comment);
  };
  ZipArchiveOutputStream.prototype._writeDataDescriptor = function(ae) {
    this.write(zipUtil.getLongBytes(constants.SIG_DD));
    this.write(zipUtil.getLongBytes(ae.getCrc()));
    if (ae.isZip64()) {
      this.write(zipUtil.getEightBytes(ae.getCompressedSize()));
      this.write(zipUtil.getEightBytes(ae.getSize()));
    } else {
      this.write(zipUtil.getLongBytes(ae.getCompressedSize()));
      this.write(zipUtil.getLongBytes(ae.getSize()));
    }
  };
  ZipArchiveOutputStream.prototype._writeLocalFileHeader = function(ae) {
    var gpb = ae.getGeneralPurposeBit();
    var method = ae.getMethod();
    var name = ae.getName();
    var extra = ae.getLocalFileDataExtra();
    if (ae.isZip64()) {
      gpb.useDataDescriptor(true);
      ae.setVersionNeededToExtract(constants.MIN_VERSION_ZIP64);
    }
    if (gpb.usesUTF8ForNames()) {
      name = new Buffer(name);
    }
    ae._offsets.file = this.offset;
    this.write(zipUtil.getLongBytes(constants.SIG_LFH));
    this.write(zipUtil.getShortBytes(ae.getVersionNeededToExtract()));
    this.write(gpb.encode());
    this.write(zipUtil.getShortBytes(method));
    this.write(zipUtil.getLongBytes(ae.getTimeDos()));
    ae._offsets.data = this.offset;
    if (gpb.usesDataDescriptor()) {
      this.write(constants.LONG_ZERO);
      this.write(constants.LONG_ZERO);
      this.write(constants.LONG_ZERO);
    } else {
      this.write(zipUtil.getLongBytes(ae.getCrc()));
      this.write(zipUtil.getLongBytes(ae.getCompressedSize()));
      this.write(zipUtil.getLongBytes(ae.getSize()));
    }
    this.write(zipUtil.getShortBytes(name.length));
    this.write(zipUtil.getShortBytes(extra.length));
    this.write(name);
    this.write(extra);
    ae._offsets.contents = this.offset;
  };
  ZipArchiveOutputStream.prototype.getComment = function(comment) {
    return this._archive.comment !== null ? this._archive.comment : '';
  };
  ZipArchiveOutputStream.prototype.isZip64 = function() {
    return this._archive.forceZip64 || this._entries.length > constants.ZIP64_MAGIC_SHORT || this._archive.centralLength > constants.ZIP64_MAGIC || this._archive.centralOffset > constants.ZIP64_MAGIC;
  };
  ZipArchiveOutputStream.prototype.setComment = function(comment) {
    this._archive.comment = comment;
  };
})(require('buffer').Buffer, require('process'));
