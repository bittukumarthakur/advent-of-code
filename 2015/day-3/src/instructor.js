class Instructor {
  #santa
  #navigation
  #visitedHousePositions

  constructor(santa, navigation) {
    this.#santa = santa;
    this.#navigation = navigation;
    this.#numberOfHouse = 1;
    this.
      this.#visitedHousePositions = { "0_0": { x: 0, y: 0 } };
  }

  instruct([...instructions]) {
    instructions.forEach((instruction) => {

      switch (instruction) {
        case this.#navigation.north: { this.#santa.moveNorth(); }
          break;

        case this.#navigation.south: { this.#santa.moveSouth(); }
          break;

        case this.#navigation.east: { this.#santa.moveEast(); }
          break;

        case this.#navigation.west: { this.#santa.moveWest(); }
          break;

        default: return;
      };

      const currentHouseLocation = this.#santa.getPosition();
      const locationKey = `${currentHouseLocation.x}_${currentHouseLocation.y}`;

      this.#visitedHousePositions[locationKey] = currentHouseLocation;
    });

  }

  numberOfHouseVisited() {
    return Object.keys(this.#visitedHousePositions).length;
  }

};

exports.Instructor = Instructor;