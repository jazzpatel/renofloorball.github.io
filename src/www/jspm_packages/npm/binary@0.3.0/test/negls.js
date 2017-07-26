/* */ 
(function(Buffer) {
  var binary = require('../index');
  var test = require('tap').test;
  test('negls', function(t) {
    t.plan(4);
    var buf = new Buffer([226, 219, 246, 236, 245, 243, 255, 63, 52, 222, 16, 203, 254, 210, 255]);
    binary.parse(buf).word8ls('a').word16ls('b').word32ls('c').word64ls('d').tap(function(vars) {
      t.same(vars.a, -30);
      t.same(vars.b, -2341);
      t.same(vars.c, -789012);
      t.ok(Math.abs(vars.d - -12667700813876161) < 1000);
    });
    ;
  });
})(require('buffer').Buffer);
