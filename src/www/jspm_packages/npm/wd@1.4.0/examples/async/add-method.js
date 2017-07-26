/* */ 
require('colors');
var chai = require('chai');
var should = chai.should();
var wd;
try {
  wd = require('../../lib/main');
} catch (err) {
  wd = require('../../lib/main');
}
wd.addAsyncMethod('elementByCssSelectorWhenReady', function(selector, timeout) {
  var cb = wd.findCallback(arguments);
  var _this = this;
  this.waitForElementByCssSelector(selector, timeout, function() {
    _this.elementByCssSelector(selector, cb);
  });
});
var browser = wd.remote();
browser.on('status', function(info) {
  console.log(info.cyan);
});
browser.on('command', function(eventType, command, response) {
  console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
browser.on('http', function(meth, path, data) {
  console.log(' > ' + meth.magenta, path, (data || '').grey);
});
browser.init({browserName: 'chrome'}, function() {
  browser.get("http://admc.io/wd/test-pages/guinea-pig.html", function() {
    browser.title(function(err, title) {
      title.should.include('WD');
      browser.elementByCssSelectorWhenReady('#your_comments', 500, function(err, el) {
        should.exist(el);
        browser.quit();
      });
    });
  });
});
