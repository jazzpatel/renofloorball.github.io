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
var Asserter = wd.Asserter;
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var appendChild = 'setTimeout(function() {\n' + ' $("#i_am_an_id").append("<div class=\\"child\\">a waitFor child</div>");\n' + '}, arguments[0]);\n';
var removeChildren = ' $("#i_am_an_id").empty();\n';
var tagChaiAssertionError = function(err) {
  err.retriable = err instanceof chai.AssertionError;
  throw err;
};
var customTextNonEmpty = new Asserter(function(target) {
  return target.text().then(function(text) {
    text.should.have.length.above(0);
    return text;
  }).catch(tagChaiAssertionError);
});
var customIsDisplayed = new Asserter(function(el) {
  return el.isDisplayed().should.eventually.be.ok.catch(tagChaiAssertionError);
});
var customTextInclude = function(text) {
  return new Asserter(function(target) {
    return target.text().should.eventually.include(text).text().catch(tagChaiAssertionError);
  });
};
wd.PromiseChainWebdriver.prototype.waitForElementWithTextByCss = function(selector, timeout, pollFreq) {
  return this.waitForElementByCss(selector, customTextNonEmpty, timeout, pollFreq);
};
var browser = wd.promiseChainRemote();
browser.init({browserName: 'chrome'}).get("http://admc.io/wd/test-pages/guinea-pig.html").title().should.become('WD Tests').execute(removeChildren).execute(appendChild, [500]).waitFor(customTextInclude('a waitFor child'), 2000).should.eventually.include('a waitFor child').execute(removeChildren).execute(appendChild, [500]).waitForElementByCss("#i_am_an_id .child", customTextNonEmpty, 2000).waitForElementByCss("#i_am_an_id .child", customIsDisplayed, 2000).text().should.become('a waitFor child').execute(removeChildren).execute(appendChild, [500]).waitForElementWithTextByCss("#i_am_an_id .child", 2000).text().should.become('a waitFor child').fin(function() {
  return browser.quit();
}).done();
