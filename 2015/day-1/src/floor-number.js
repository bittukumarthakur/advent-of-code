const directions = { "(": 1, ")": -1 };

const evaluateFloor = function (instructions) {
  return instructions.reduce((currentFloor, instruction) => {
    return currentFloor + directions[instruction];
  }, 0);
};

const basementPosition = function (instructions) {
  let currentFloor = 0;

  for (let index = 0; index < instructions.length; index++) {
    const instruction = instructions[index];
    currentFloor = currentFloor + directions[instruction];
    const isbasement = currentFloor === -1;

    if (isbasement) {
      return index + 1;
    };
  };

  return undefined;
};

const main = function () {
  const fs = require('fs');

  const rawInstructions = fs.readFileSync("day-1/raw-instructions.txt", "utf8");
  const instructions = Array.from(rawInstructions);

  console.log(evaluateFloor(instructions));
  console.log(basementPosition(instructions));
};

main();