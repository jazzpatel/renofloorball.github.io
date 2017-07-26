/* */ 
require('colors');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
var wd;
try {
  wd = require('../../lib/main');
} catch (err) {
  wd = require('../../lib/main');
}
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var Q = wd.Q;
var browser = wd.promiseChainRemote();
browser.on('status', function(info) {
  console.log(info.cyan);
});
browser.on('command', function(eventType, command, response) {
  console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
browser.on('http', function(meth, path, data) {
  console.log(' > ' + meth.magenta, path, (data || '').grey);
});
browser.init({browserName: 'chrome'}).get('http://angularjs.org/').elementById('the-basics').click().click().click().text().should.become('The Basics').elementById('the-basics').text().text().should.not.become('The Basics').elementById('add-some-control').elementById('the-basics').text().should.become('The Basics').elementById('add-some-control').elementById('>', 'the-basics').text().should.become('The Basics').should.be.rejectedWith(/status: 7/).elementById('the-basics').text('<').should.not.become('The Basics').elementById('the-basics').text().should.become('The Basics').elementById('the-basics').text().should.eventually.include('The Basics').elementById('the-basics').text().then(function(text) {
  text.should.equal('The Basics');
  text.should.include('The Basics');
}).then(function() {
  var basicEl = browser.elementById('the-basics');
  return Q.all([basicEl.text().should.become('The Basics'), basicEl.text().should.eventually.include('The Basics')]);
}).then(function() {
  var basicEl = browser.elementById('the-basics');
  var sequence = [function() {
    return basicEl.text().should.become('The Basics');
  }, function() {
    return basicEl.text().should.eventually.include('The Basics');
  }];
  return sequence.reduce(Q.when, new Q());
}).fin(function() {
  return browser.quit();
}).done();
