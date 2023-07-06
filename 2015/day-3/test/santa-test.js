const { it, describe } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { Santa } = require("../src/santa.js")

describe("Santa", () => {

  it("should return  santa initial position in the beginning", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    deepStrictEqual({ x: 0, y: 0 }, santa.position());
  });

  it("should move to north.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);
    santa.moveNorth();

    deepStrictEqual({ x: 0, y: 1 }, santa.position());
  });

  it("should move to south.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);
    santa.moveSouth();

    deepStrictEqual({ x: 0, y: -1 }, santa.position());
  });

  it("should move to east.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);
    santa.moveEast();

    deepStrictEqual({ x: 1, y: 0 }, santa.position());
  });

  it("should move to west.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);
    santa.moveWest();

    deepStrictEqual({ x: -1, y: 0 }, santa.position());
  });

  it("should move multiple direction and calculate final position.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);
    santa.moveNorth();
    santa.moveEast();

    deepStrictEqual({ x: 1, y: 1 }, santa.position());
  });

});

