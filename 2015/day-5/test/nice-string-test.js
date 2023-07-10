const { it, describe } = require("node:test");
const assert = require("assert");
const { isNiceString, isNicerString } = require("../src/nice-string.js")

describe("isNiceString", () => {
  it("should be nice string.", () => {
    assert.ok(isNiceString("ugknbfddgicrmopn"));
    assert.ok(isNiceString("aaa"));
  });

  it("should be naughty string.", () => {
    assert.ok(!isNiceString("jchzalrnumimnmhp"));
    assert.ok(!isNiceString("haegwjzuvuyypxyu"));
    assert.ok(!isNiceString("dvszwmarrgswjxmb"));
  });

});

describe("isNicerString", () => {
  it("should be nicer string.", () => {
    assert.ok(isNicerString("qjhvhtzxzqqjkmpb"));
    assert.ok(isNicerString("xxyxx"));
  });

  it("should not be nicer string.", () => {
    assert.ok(!isNicerString("uurcxstgmygtbstg"));
    assert.ok(!isNicerString("ieodomkazucvgmuy"));
  });
});