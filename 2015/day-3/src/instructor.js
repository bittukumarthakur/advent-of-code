class Instructor {
  #santa
  #navigationSymbol
  #visitedHousePositions

  constructor(santa, navigationSymbol) {
    this.#santa = santa;
    this.#navigationSymbol = navigationSymbol;
    this.#visitedHousePositions = { "0_0": { x: 0, y: 0 } };
  }

  #isInvalidInstruction(instruction) {
    return !Object.values(this.#navigationSymbol).includes(instruction);
  }

  #updateVisistedHousePosition() {
    const currentHouseLocation = this.#santa.getPosition();
    const locationKey = this.#createLocationKey(currentHouseLocation);

    this.#visitedHousePositions[locationKey] = currentHouseLocation;
  }

  #createLocationKey(currentHouseLocation) {
    return `${currentHouseLocation.x}_${currentHouseLocation.y}`;
  }

  #moveSanta(instruction) {



    switch (instruction) {
      case this.#navigationSymbol.north: { this.#santa.moveNorth(); }
        break;

      case this.#navigationSymbol.south: { this.#santa.moveSouth(); }
        break;

      case this.#navigationSymbol.east: { this.#santa.moveEast(); }
        break;

      case this.#navigationSymbol.west: { this.#santa.moveWest(); }
        break;

      default: return;
    }
  }

  instruct([...instructions]) {
    instructions.forEach((instruction) => {
      if (this.#isInvalidInstruction(instruction)) {
        return;
      }
      this.#moveSanta(instruction);
      this.#updateVisistedHousePosition();
    });
  }

  numberOfHouseVisited() {
    return Object.keys(this.#visitedHousePositions).length;
  }

};

exports.Instructor = Instructor;