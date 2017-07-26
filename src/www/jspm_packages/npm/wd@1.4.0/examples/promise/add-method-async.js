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
wd.addAsyncMethod('elementByCssSelectorWhenReady', function(selector, timeout) {
  var cb = wd.findCallback(arguments);
  var _this = this;
  this.waitForElementByCssSelector(selector, timeout, function() {
    _this.elementByCssSelector(selector, cb);
  });
});
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
browser.init({browserName: 'chrome'}).get("http://admc.io/wd/test-pages/guinea-pig.html").title().should.become('WD Tests').elementByCssSelector('#comments').getTagName().should.become('textarea').elementByCssSelectorWhenReady('#comments', 2000).fin(function() {
  return browser.quit();
}).done();
