const evaluateFloor = function (instructions, navigationManual) {
  return instructions.reduce((currentFloor, instruction) => {
    return currentFloor + navigationManual[instruction];
  }, 0);
};

exports.evaluateFloor = evaluateFloor;