const { it, describe } = require("node:test");
const assert = require("assert");
const { isContainDisallowedSubstrings } = require("../src/disallowed-substrings");

describe("isContainDisallowedSubstrings", () => {
  it("should contain diallowed substring", () => {
    assert.ok(isContainDisallowedSubstrings("ab"));
    assert.ok(isContainDisallowedSubstrings("abcxy"));
  });

  it("should not contain diallowed substring", () => {
    assert.ok(!isContainDisallowedSubstrings("bittu"));
    assert.ok(!isContainDisallowedSubstrings("hello"));
  });
});