const { it, describe } = require("node:test");
const { deepStrictEqual } = require("assert");
const { Instructor } = require("../src/instructor.js");
const { worker } = require("../src/santa.js");

describe("Instructor", () => {
  describe("numberOfHouseVisited", () => {
    it("should return 1, when no instruction is provided.", () => {
      const santa = new worker({ x: 0, y: 0 });
      const navigationSymbol = {};
      const instructor = new Instructor(navigationSymbol);

      instructor.addWorker(santa);

      deepStrictEqual(instructor.numberOfHouseVisited(), 1);
    });

    it("should not increase the no. of house, when invalid instruction is provided.", () => {
      const santa = new worker({ x: 0, y: 0 });
      const navigationSymbol = {};
      const instructor = new Instructor(navigationSymbol)

      instructor.addWorker(santa);
      instructor.instruct("(");

      deepStrictEqual(instructor.numberOfHouseVisited(), 1);
    });

    it("should not count already visited house.", () => {
      const santa = new worker({ x: 0, y: 0 });
      const navigationSymbol = {
        "north": "^",
        "south": "v",
        "east": ">",
        "west": "<"
      };
      const instructor = new Instructor(navigationSymbol);

      instructor.addWorker(santa);
      instructor.instruct("^>v<");

      deepStrictEqual(instructor.numberOfHouseVisited(), 4);
    });

    it("should count unique houses visited by santa", () => {
      const santa = new worker({ x: 0, y: 0 });
      const navigationSymbol = {
        "north": "^",
        "south": "v",
        "east": ">",
        "west": "<"
      };
      const instructor = new Instructor(navigationSymbol);

      instructor.addWorker(santa);
      instructor.instruct("^v^v^v^v^v");

      deepStrictEqual(instructor.numberOfHouseVisited(), 2);
    });

    it("should instruct santa and roboSanta.", () => {
      const santa = new worker({ x: 0, y: 0 });
      const roboSanta = new worker({ x: 0, y: 0 });
      const navigationSymbol = {
        "north": "^",
        "south": "v",
        "east": ">",
        "west": "<"
      };
      const instructor = new Instructor(navigationSymbol);

      instructor.addWorker(santa);
      instructor.addWorker(roboSanta);
      instructor.instruct("^v");

      deepStrictEqual(instructor.numberOfHouseVisited(), 3);
    });
  });
});
