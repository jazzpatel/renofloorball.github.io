/* */ 
(function(Buffer) {
  var Buffers = require('../index');
  var bufs = Buffers([new Buffer([1, 2, 3]), new Buffer([4, 5, 6, 7]), new Buffer([8, 9, 10])]);
  var removed = bufs.splice(2, 4, new Buffer('ab'), new Buffer('cd'));
  console.dir({
    removed: removed.slice(),
    bufs: bufs.slice()
  });
})(require('buffer').Buffer);
