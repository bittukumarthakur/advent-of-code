const fs = require('fs');
const { evaluateFloor } = require('./src/evaluate-floor');

const main = function () {

  const rawInstructions = fs.readFileSync("resources/raw-instructions.txt", "utf8");
  const instructions = Array.from(rawInstructions);
  const navigationManual = { "(": 1, ")": -1 };

  const santaFloorNumber = evaluateFloor(instructions, navigationManual);
  console.log("santa floor number is", santaFloorNumber);

};

main();