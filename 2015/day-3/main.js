const { readFileSync } = require("fs");
const { Instructor } = require("./src/instructor");
const { worker } = require("./src/santa");

const loadInstructionsFromFile = function () {
  return readFileSync("resources/instructions.txt", "utf-8");
};

const firstPart = function (instructions, navigationSymbol) {
  const santa = new worker({ x: 0, y: 0 });
  const instructor = new Instructor(navigationSymbol);

  instructor.addWorker(santa);
  instructor.instruct(instructions);

  return instructor.numberOfHouseVisited()
};

const secondPart = function (instructions, navigationSymbol) {
  const santa = new worker({ x: 0, y: 0 });
  const roboSanta = new worker({ x: 0, y: 0 });

  const instructor = new Instructor(navigationSymbol);

  instructor.addWorker(santa);
  instructor.addWorker(roboSanta);
  instructor.instruct(instructions);

  return instructor.numberOfHouseVisited()
};

const main = function () {
  const instructions = loadInstructionsFromFile();
  const navigationSymbol = {
    "north": "^",
    "south": "v",
    "east": ">",
    "west": "<"
  };

  //first part 
  const firstPartAnswer = firstPart(instructions, navigationSymbol);
  console.log("Number of houses santa visited:", firstPartAnswer);

  //second part 
  const secondPartAnswer = secondPart(instructions, navigationSymbol);
  console.log("Number of houses santa and robo-santa visited:", secondPartAnswer);
};

main();