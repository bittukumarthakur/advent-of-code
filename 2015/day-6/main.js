const { SwitchBoard, LightOperator, Light } = require("./src/house-decoration");
const { loadInstructions } = require("./src/load-instructions");

const getLightsGrid = (size) => {
  return new Array(size).fill(" ").map(() => {
    return new Array(size).fill(" ").map(() => { return new Light() });
  });
};

const main = () => {
  const lights = getLightsGrid(1000);

  const switchBoard = new SwitchBoard(lights);
  const lightOperator = new LightOperator(switchBoard);
  const instructions = loadInstructions();

  lightOperator.operate(instructions);
  console.log("number of lights turn on:", lightOperator.status())
};

main();

