/* */ 
(function(Buffer) {
  var binary = require('../index');
  var test = require('tap').test;
  test('bu', function(t) {
    t.plan(8);
    var buf = new Buffer([44, 2, 43, 164, 213, 37, 37, 29, 81, 180, 20, 155, 115, 203, 193]);
    binary.parse(buf).word8bu('a').word16bu('b').word32bu('c').word64bu('d').tap(function(vars) {
      t.same(vars.a, 44);
      t.same(vars.b, 555);
      t.same(vars.c, 2765432101);
      t.ok(Math.abs(vars.d - 2112667700813876161) < 1500);
    });
    ;
    binary.parse(buf).word8be('a').word16be('b').word32be('c').word64be('d').tap(function(vars) {
      t.same(vars.a, 44);
      t.same(vars.b, 555);
      t.same(vars.c, 2765432101);
      t.ok(Math.abs(vars.d - 2112667700813876161) < 1500);
    });
    ;
  });
})(require('buffer').Buffer);
