const { it, describe } = require("node:test");
const assert = require("assert");
const { getNubmerOfVowels } = require("../src/number-of-vowels.js");

describe("getNumberOfVowels", () => {
  it("should return 0 number of vowels", () => {
    assert.strictEqual(getNubmerOfVowels("b"), 0);
    assert.strictEqual(getNubmerOfVowels("bc"), 0);
  });

  it("should return number of vowels", () => {
    assert.strictEqual(getNubmerOfVowels("a"), 1);
    assert.strictEqual(getNubmerOfVowels("aei"), 3);
    assert.strictEqual(getNubmerOfVowels("mango"), 2);
  });

});