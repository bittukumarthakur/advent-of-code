const { it, describe } = require("node:test");
const { strictEqual } = require("assert");
const { basementPosition } = require("../src/basement-position");

describe("character position that lead santa to basement", () => {
  it("shoud enter in basement at first instruction.", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const characterPostion = basementPosition([")"], navigationManual);
    strictEqual(characterPostion, 1);
  });

});