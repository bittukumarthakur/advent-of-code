const { it, describe } = require("node:test");
const { deepStrictEqual } = require("assert");
const { Instructor } = require("../src/instructor.js");
const { Santa } = require("../src/santa.js");

describe("instructor", () => {

  it("should visited one house, when santa is in initial position.", () => {
    const santa = {};
    const navigation = {};

    const instructor = new Instructor(santa, navigation)

    deepStrictEqual(instructor.numberOfHouseVisited(), 1);
  });

  it("should not move santa, when wrong direction is given.", () => {
    const santa = {};
    const navigation = { "v": "south" };

    const instructor = new Instructor(santa, navigation);
    instructor.instruct(")");

    deepStrictEqual(instructor.numberOfHouseVisited(), 1);
  });

  it("should make santa visit two houses, when north direction is specified.", () => {
    const santa = new Santa({ x: 0, y: 0 });
    const navigation = { "north": "^" };
    const instructor = new Instructor(santa, navigation);

    instructor.instruct("^");

    deepStrictEqual(instructor.numberOfHouseVisited(), 2);
  });

  it("should make santa visit two house, when south direction is specified.", () => {
    const santa = new Santa({ x: 0, y: 0 });
    const navigation = { "south": "v" };

    const instructor = new Instructor(santa, navigation);
    instructor.instruct("v");

    deepStrictEqual(instructor.numberOfHouseVisited(), 2);
  });

  it("should make santa visit two house, when east direction is specified.", () => {
    const santa = new Santa({ x: 0, y: 0 });
    const navigation = { "east": ">" };

    const instructor = new Instructor(santa, navigation);
    instructor.instruct(">");

    deepStrictEqual(instructor.numberOfHouseVisited(), 2);
  });

  it("should make santa visit two house, when west direction is specified.", () => {
    const santa = new Santa({ x: 0, y: 0 });
    const navigation = { "west": "<" };

    const instructor = new Instructor(santa, navigation);
    instructor.instruct("<");

    deepStrictEqual(instructor.numberOfHouseVisited(), 2);
  });

  it("should not count already visited house.", () => {
    const santa = new Santa({ x: 0, y: 0 });
    const navigation = {
      "north": "^",
      "south": "v",
      "east": ">",
      "west": "<"
    };

    const instructor = new Instructor(santa, navigation);
    instructor.instruct("^>v<");

    deepStrictEqual(instructor.numberOfHouseVisited(), 4);
  });

  it("should count only two house, but santa visited the same house multiple times.", () => {
    const santa = new Santa({ x: 0, y: 0 });
    const navigation = {
      "north": "^",
      "south": "v",
      "east": ">",
      "west": "<"
    };

    const instructor = new Instructor(santa, navigation);
    instructor.instruct("^v^v^v^v^v");

    deepStrictEqual(instructor.numberOfHouseVisited(), 2);
  });



});

