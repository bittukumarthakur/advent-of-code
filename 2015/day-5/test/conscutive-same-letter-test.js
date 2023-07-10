const { it, describe } = require("node:test");
const assert = require("assert");
const { isContainConsecutiveSameLetter } = require("../src/conscutive-same-letter");

describe("isCointainConscutiveSameLetter", () => {
  it("should contain conscutive same letter", () => {
    assert.ok(isContainConsecutiveSameLetter("aa"));
    assert.ok(isContainConsecutiveSameLetter("abcdde"));
    assert.ok(isContainConsecutiveSameLetter("aabbccdd"));
  });

  it("should not contain conscutive same letter", () => {
    assert.ok(!isContainConsecutiveSameLetter("abc"));
    assert.ok(!isContainConsecutiveSameLetter("nice"));
  });


});