const { it, describe } = require("node:test");
const assert = require("assert");
const { isNiceString } = require("../src/isNiceString.js")

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