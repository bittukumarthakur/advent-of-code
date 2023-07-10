const { it, describe } = require("node:test");
const assert = require("assert");
const { areContainDisallowedSubstrings } = require("../src/disallowed-substrings");

describe("isContainDisallowedSubstrings", () => {
  it("should contain diallowed substring", () => {
    assert.ok(areContainDisallowedSubstrings("ab"));
    assert.ok(areContainDisallowedSubstrings("abcxy"));
  });

  it("should not contain diallowed substring", () => {
    assert.ok(!areContainDisallowedSubstrings("bittu"));
    assert.ok(!areContainDisallowedSubstrings("hello"));
  });
});