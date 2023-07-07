const { readFileSync } = require("fs");
const { Instructor } = require("./src/instructor");
const { Santa } = require("./src/santa");

const readFile = function () {
  return readFileSync("resources/instructions.txt", "utf-8");
};

const main = function () {
  const navigation = {
    "north": "^",
    "south": "v",
    "east": ">",
    "west": "<"
  };

  const instructions = readFile();
  const santa = new Santa({ x: 0, y: 0 });
  const instructor = new Instructor(santa, navigation);

  instructor.instruct(instructions);

  console.log("Number of houses santa visited:", instructor.numberOfHouseVisited());
};

main();