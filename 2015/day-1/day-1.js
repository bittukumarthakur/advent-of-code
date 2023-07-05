const fs = require('fs');
const { evaluateFloor } = require('./src/evaluate-floor');
const { basementPosition } = require('./src/basement-position');

const main = function () {

  const rawInstructions = fs.readFileSync("resources/raw-instructions.txt", "utf8");
  const instructions = Array.from(rawInstructions);
  const navigationManual = { "(": 1, ")": -1 };

  // first part
  const santaFloorNumber = evaluateFloor(instructions, navigationManual);
  console.log("Santa is in floor", santaFloorNumber);

  // second part
  const basementNumber = basementPosition(instructions, navigationManual)
  console.log("Santa enter the basement at character position", basementNumber);


};

main();