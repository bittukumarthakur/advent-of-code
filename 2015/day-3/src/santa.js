class Santa {
  #position

  constructor(initialPosition) {
    this.#position = initialPosition;
  }

  #move(delta) {
    this.#position.x += delta.x;
    this.#position.y += delta.y;
  }

  getPosition() {
    return this.#position;
  }

  moveNorth() {
    this.#move({ x: 0, y: 1 });
  }

  moveSouth() {
    this.#move({ x: 0, y: -1 });
  }

  moveEast() {
    this.#move({ x: 1, y: 0 });
  }

  moveWest() {
    this.#move({ x: -1, y: 0 });
  }
}

exports.Santa = Santa;