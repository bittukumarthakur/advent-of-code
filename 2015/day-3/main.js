const { readFileSync } = require("fs");
const { Instructor } = require("./src/instructor");
const { Santa } = require("./src/santa");

const loadInstructionsFromFile = function () {
  return readFileSync("resources/instructions.txt", "utf-8");
};

const main = function () {
  const navigationSymbol = {
    "north": "^",
    "south": "v",
    "east": ">",
    "west": "<"
  };

  const instructions = loadInstructionsFromFile();
  const santa = new Santa({ x: 0, y: 0 });
  const instructor = new Instructor(santa, navigationSymbol);

  instructor.instruct(instructions);

  //first part 
  console.log("Number of houses santa visited:", instructor.numberOfHouseVisited());
};

main();