class Light {
  #isLightOn;
  #toggleLookup;

  constructor() {
    this.#isLightOn = false;
    this.#toggleLookup = {
      true: false,
      false: true
    };
  }

  isOn() {
    return this.#isLightOn;
  }

  turnOn() {
    this.#isLightOn = true;
  }

  turnOff() {
    this.#isLightOn = false;
  }

  toggle() {
    this.#isLightOn = this.#toggleLookup[this.#isLightOn];
  }
};

class SwitchBoard {
  #lights;
  #turnMethods;

  constructor(lights) {
    this.#lights = lights;
    this.#turnMethods = {
      "on": (light) => light.turnOn(),
      "off": (light) => light.turnOff(),
      "toggle": (light) => light.toggle(),
    };
  }

  turn(name, lightsLocation) {
    lightsLocation.forEach((lightLocation) => {
      const light = this.#lights[lightLocation.x][lightLocation.y];
      this.#turnMethods[name](light);
    });
  };

  turnOnLights(lightsLocation) {
    this.turn("on", lightsLocation);
  };

  turnOffLights(lightsLocation) {
    this.turn("off", lightsLocation);
  }

  toggle(lightsLocation) {
    this.turn("toggle", lightsLocation);
  }

  status() {
    let numberOfLightsTurnOn = 0;

    this.#lights.forEach((xAxisLights) => {
      xAxisLights.forEach((light) => {
        if (light.isOn()) {
          numberOfLightsTurnOn++;
        };
      });
    });

    return numberOfLightsTurnOn;
  }

};

class LightOperator {
  #switchBoard
  #turnMethods

  constructor(switchBoard) {
    this.#switchBoard = switchBoard;
    this.#turnMethods = {
      "turn-on": (switchBoard, positions) => switchBoard.turnOnLights(positions),
      "turn-off": (switchBoard, positions) => switchBoard.turnOffLights(positions),
      "toggle": (switchBoard, positions) => switchBoard.toggle(positions)
    };
  }

  #getPositions(startCorner, endCorner) {
    const positions = [];

    for (let xAxis = startCorner.x; xAxis <= endCorner.x; xAxis++) {
      for (let yAxis = startCorner.y; yAxis <= endCorner.y; yAxis++) {
        positions.push({ x: xAxis, y: yAxis });
      };
    };

    return positions;
  }

  operate(instructions) {
    instructions.forEach((instruction) => {
      const positions = this.#getPositions(instruction.startCorner, instruction.endCorner);

      this.#turnMethods[instruction.name](this.#switchBoard, positions);
    });
  }

  status() {
    return this.#switchBoard.status();
  }
}

exports.Light = Light;
exports.SwitchBoard = SwitchBoard;
exports.LightOperator = LightOperator