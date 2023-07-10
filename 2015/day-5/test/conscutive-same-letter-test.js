const { it, describe } = require("node:test");
const assert = require("assert");
const { isCointainConscutiveSameLetter } = require("../src/conscutive-same-letter");

describe("isCointainConscutiveSameLetter", () => {
  it("should contain conscutive same letter", () => {
    assert.ok(isCointainConscutiveSameLetter("aa"));
    assert.ok(isCointainConscutiveSameLetter("abcdde"));
    assert.ok(isCointainConscutiveSameLetter("aabbccdd"));
  });

  it("should not contain conscutive same letter", () => {
    assert.ok(!isCointainConscutiveSameLetter("abc"));
    assert.ok(!isCointainConscutiveSameLetter("nice"));
  });


});