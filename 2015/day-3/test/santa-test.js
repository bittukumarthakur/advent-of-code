const { it, describe } = require("node:test");
const { deepStrictEqual } = require("assert");
const { Santa } = require("../src/santa.js")

describe("Santa", () => {

  it("should return current position.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    deepStrictEqual({ x: 0, y: 0 }, santa.getPosition());
  });

  it("should move to north.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    santa.moveNorth();

    deepStrictEqual(santa.getPosition(), { x: 0, y: 1 });
  });

  it("should move to south.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    santa.moveSouth();

    deepStrictEqual(santa.getPosition(), { x: 0, y: -1 });
  });

  it("should move to east.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    santa.moveEast();

    deepStrictEqual(santa.getPosition(), { x: 1, y: 0 });
  });

  it("should move to west.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    santa.moveWest();

    deepStrictEqual(santa.getPosition(), { x: -1, y: 0 });
  });

  it("should move in given multiple direction.", () => {
    const initialPosition = { x: 0, y: 0 };
    const santa = new Santa(initialPosition);

    santa.moveNorth();
    santa.moveEast();

    deepStrictEqual(santa.getPosition(), { x: 1, y: 1 });
  });
});

