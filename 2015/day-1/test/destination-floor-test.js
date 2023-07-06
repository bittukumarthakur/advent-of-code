const { it, describe } = require("node:test");
const { strictEqual } = require("assert");
const { destinationFloor } = require("../src/destination-floor");

describe("evaluate floor number", () => {
  it("should go up one floor", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const floorNumber = destinationFloor(["("], navigationManual)

    strictEqual(floorNumber, 1);
  });

  it("should go down one floor", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const floorNumber = destinationFloor([")"], navigationManual)

    strictEqual(floorNumber, -1);
  });

  it("should evaluate multiple instructions", () => {
    const navigationManual = { "(": 1, ")": -1 };
    const floorNumber = destinationFloor(["(", "(", ")"], navigationManual)

    strictEqual(floorNumber, 1);
  });
});