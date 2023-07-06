const isBasement = (basementFloorNumber, currentFloor) => {
  return basementFloorNumber < currentFloor
};

const basementPosition = function (instructions, navigationManual) {
  let basementFloorNumber = -1;
  let currentFloor = 0;
  let index = 0;

  while (isBasement(basementFloorNumber, currentFloor) && index < instructions.length) {
    const instruction = instructions[index];
    currentFloor = currentFloor + navigationManual[instruction];
    index++;
  };

  return index;
};

exports.basementPosition = basementPosition;