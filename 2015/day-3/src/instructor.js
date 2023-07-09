class Instructor {
  #santa
  #navigationSymbol
  #visitedHousePositions
  #workers

  constructor(navigationSymbol) {
    this.#navigationSymbol = navigationSymbol;
    this.#workers = [];
  }

  addWorker(worker) {
    this.#workers.push(worker);
    this.#visitedHousePositions = { "0_0": { x: 0, y: 0 } };
  }

  #isInvalidInstruction(instruction) {
    return !Object.values(this.#navigationSymbol).includes(instruction);
  }

  #updateVisistedHousePosition(position) {
    const locationKey = this.#createLocationKey(position);
    this.#visitedHousePositions[locationKey] = position;
  }

  #createLocationKey(location) {
    return `${location.x}_${location.y}`;
  }

  #moveWorker(worker, instruction) {
    switch (instruction) {
      case this.#navigationSymbol.north: { worker.moveNorth(); }
        break;

      case this.#navigationSymbol.south: { worker.moveSouth(); }
        break;

      case this.#navigationSymbol.east: { worker.moveEast(); }
        break;

      case this.#navigationSymbol.west: { worker.moveWest(); }
        break;

      default: return;
    }
  }

  instruct([...instructions]) {
    instructions.forEach((instruction, index) => {
      if (this.#isInvalidInstruction(instruction)) {
        return;
      };

      const workerIndex = index % this.#workers.length;
      const worker = this.#workers[workerIndex];

      this.#moveWorker(worker, instruction);
      this.#updateVisistedHousePosition(worker.getPosition());
    });
  }

  numberOfHouseVisited() {
    return Object.keys(this.#visitedHousePositions).length;
  }

};

exports.Instructor = Instructor;