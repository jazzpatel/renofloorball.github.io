/* */ 
var core = require('rijs.core').default,
    data = require('rijs.data').default,
    db = require('rijs.db').default,
    update = require('utilise/update'),
    remove = require('utilise/remove'),
    falsy = require('utilise/falsy'),
    keys = require('utilise/keys'),
    push = require('utilise/push'),
    pop = require('utilise/pop'),
    expect = require('chai').expect,
    mysql = require('./dist/index').default,
    mockery = require('mockery'),
    sql,
    next;
describe('MySQL', function() {
  before(function() {
    mockery.enable();
    mockery.registerMock('mysql', {createPool: function() {
        return {
          escape: function(d) {
            return "'" + d + "'";
          },
          query: function(d, fn) {
            next = fn;
            console.log('sql', sql = d);
          }
        };
      }});
  });
  beforeEach(function() {
    sql = '';
  });
  after(function() {
    mockery.disable();
  });
});
