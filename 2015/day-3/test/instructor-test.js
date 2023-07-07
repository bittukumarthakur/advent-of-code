const { it, describe } = require("node:test");
const { deepStrictEqual } = require("assert");
const { Instructor } = require("../src/instructor.js");
const { Santa } = require("../src/santa.js");

describe("Instructor", () => {
  describe("numberOfHouseVisited", () => {
    it("should return 1, when no instruction is provided.", () => {
      const santa = {};
      const navigationSymbol = {};

      const instructor = new Instructor(santa, navigationSymbol)

      deepStrictEqual(instructor.numberOfHouseVisited(), 1);
    });

    it("should not increase the no. of house, when invalid instruction is provided.", () => {
      const santa = {};
      const navigationSymbol = { "v": "south" };

      const instructor = new Instructor(santa, navigationSymbol);
      instructor.instruct(")");

      deepStrictEqual(instructor.numberOfHouseVisited(), 1);
    });

    it("should not count already visited house.", () => {
      const santa = new Santa({ x: 0, y: 0 });
      const navigationSymbol = {
        "north": "^",
        "south": "v",
        "east": ">",
        "west": "<"
      };

      const instructor = new Instructor(santa, navigationSymbol);
      instructor.instruct("^>v<");

      deepStrictEqual(instructor.numberOfHouseVisited(), 4);
    });

    it("should count unique houses visited by santa", () => {
      const santa = new Santa({ x: 0, y: 0 });
      const navigationSymbol = {
        "north": "^",
        "south": "v",
        "east": ">",
        "west": "<"
      };

      const instructor = new Instructor(santa, navigationSymbol);
      instructor.instruct("^v^v^v^v^v");

      deepStrictEqual(instructor.numberOfHouseVisited(), 2);
    });

  });
});
