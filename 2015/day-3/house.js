const directionMap = {
  ">": { x: +1, y: 0 },
  "<": { x: -1, y: 0 },
  "^": { x: 0, y: +1 },
  "v": { x: 0, y: -1 }
};

// location = {"1,1": visited};

const visitHouse = function (instructions) {
  const visitedHouseLocations = {};

  return instructions.reduce((locations,instruction) => {
    const currentLocation = { x: 0, y: 0 };
    const x = currentLocation.x +
      locations[directionMap[instruction].x ]
  }, {});


};

const main = function () {
  const rawDirection = ">";
  const direction = Array.from(rawDirection);

  const position = { x: 0, y: 0 };

};