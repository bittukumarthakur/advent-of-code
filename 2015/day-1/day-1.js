const fs = require('fs');
const { destinationFloor } = require('./src/destination-floor');
const { basementPosition } = require('./src/basement-position');

const main = function () {

  const rawInstructions = fs.readFileSync("resources/raw-instructions.txt", "utf8");
  const instructions = Array.from(rawInstructions);
  const navigationManual = { "(": 1, ")": -1 };

  // first part
  const santaFloorNumber = destinationFloor(instructions, navigationManual);
  console.log("Santa is in floor", santaFloorNumber);

  // second part
  const basementNumber = basementPosition(instructions, navigationManual)
  console.log("Santa enter the basement at instruction position", basementNumber);


};

main();