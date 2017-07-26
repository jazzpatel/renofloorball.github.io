/* */ 
var expect = require('chai').expect,
    ripple,
    temp;
describe('Ripple', function() {
  before(function() {
    ripple = require('./dist/index').default();
  });
  beforeEach(function(done) {
    ripple.io.emit('beforeEach');
    ripple.io.once('done', debounce(done));
  });
  afterEach(function() {
    temp && ripple.io.off('change', temp);
  });
  it('should create initialise ripple and modules', function() {
    expect(ripple).to.be.a('function');
    expect(ripple.on).to.be.a('function');
    expect(ripple.draw).to.be.a('function');
    expect(ripple.sync).to.be.a('function');
    expect(ripple.io).to.be.ok;
    expect('application/javascript' in ripple.types).to.be.ok;
    expect('application/data' in ripple.types).to.be.ok;
    expect('text/plain' in ripple.types).to.be.ok;
    expect('text/html' in ripple.types).to.be.ok;
    expect('text/css' in ripple.types).to.be.ok;
  });
  it('should create global and local isolated instances', function() {
    expect(window.ripple).to.be.a('function');
    expect(window.ripple.resources).to.be.a('object');
    var ripple1 = require('./dist/index').default();
    expect(ripple != ripple1).to.be.ok;
    var ripple2 = require('./dist/index').default();
    expect(ripple1 != ripple2).to.be.ok;
  });
  it('should not send/receive pending header', function(done) {
    expect(ripple.resources.array.headers.pending).to.not.be.ok;
    ripple.resources.array.headers.pending = 10;
    ripple('array').push('sth');
    setTimeout(function() {
      expect(ripple.resources.array.headers.pending).to.not.be.ok;
      done();
    }, 1000);
  });
  it('should not send/receive fields/table header', function() {
    expect(ripple.resources.dbres.headers.fields).to.not.be.ok;
    expect(ripple.resources.dbres.headers.table).to.not.be.ok;
  });
});
