/* */ 
(function(Buffer) {
  var binary = require('../index');
  var test = require('tap').test;
  test('lu', function(t) {
    t.plan(8);
    var buf = new Buffer([44, 43, 2, 37, 37, 213, 164, 193, 203, 115, 155, 20, 180, 81, 29]);
    binary.parse(buf).word8lu('a').word16lu('b').word32lu('c').word64lu('d').tap(function(vars) {
      t.same(vars.a, 44);
      t.same(vars.b, 555);
      t.same(vars.c, 2765432101);
      t.ok(Math.abs(vars.d - 2112667700813876161) < 1500);
    });
    ;
    binary.parse(buf).word8le('a').word16le('b').word32le('c').word64le('d').tap(function(vars) {
      t.same(vars.a, 44);
      t.same(vars.b, 555);
      t.same(vars.c, 2765432101);
      t.ok(Math.abs(vars.d - 2112667700813876161) < 1500);
    });
    ;
  });
})(require('buffer').Buffer);
