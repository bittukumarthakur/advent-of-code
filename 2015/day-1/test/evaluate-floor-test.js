const { it, describe } = require("node:test");
const { strictEqual } = require("assert");
const { evaluateFloor } = require("../src/evaluate-floor");

describe("evaluate floor number", () => {
  it("should go up one floor", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const floorNumber = evaluateFloor(["("], navigationManual)

    strictEqual(floorNumber, 1);
  });

  it("should go down one floor", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const floorNumber = evaluateFloor([")"], navigationManual)

    strictEqual(floorNumber, -1);
  });

  it("should evaluate multiple instructions", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const floorNumber = evaluateFloor(["(", "(", ")"], navigationManual)

    strictEqual(floorNumber, 1);
  });
});