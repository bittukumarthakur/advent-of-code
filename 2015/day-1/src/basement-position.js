const basementPosition = function (instructions, navigationManual) {
  basementFloorNumber = -1;
  let currentFloor = 0;
  let index = 0;

  while (basementFloorNumber < currentFloor && index < instructions.length) {
    const instruction = instructions[index];
    currentFloor = currentFloor + navigationManual[instruction];
    index++;
  };

  return index;
};

exports.basementPosition = basementPosition;