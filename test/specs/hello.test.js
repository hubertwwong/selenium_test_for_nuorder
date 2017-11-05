const expect = require('chai').expect

describe("First Spec", () => {
  var pageUrl;

  beforeEach(() => {
    browser.url("http://webdriver.io");
    pageUrl = browser.getUrl();
    //console.log('outer describe - beforeEach');
  });

  it("should navigate to the WebdriverIO homepage", () => {
    expect(pageUrl).to.equal("http://webdriver.io/");
  });
});