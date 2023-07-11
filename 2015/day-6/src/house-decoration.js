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
  #methodsLookup;

  constructor(lights) {
    this.#lights = lights;
    this.#methodsLookup = {
      "on": (light) => light.turnOn(),
      "off": (light) => light.turnOff(),
      "toggle": (light) => light.toggle(),
    };
  }

  method(name, lightsLocation) {
    lightsLocation.forEach((lightLocation) => {
      const light = this.#lights[lightLocation.x][lightLocation.y];
      this.#methodsLookup[name](light);
    });
  };

  turnOnLights(lightsLocation) {
    this.method("on", lightsLocation);
  };

  turnOffLights(lightsLocation) {
    this.method("off", lightsLocation);
  }

  toggle(lightsLocation) {
    this.method("toggle", lightsLocation);
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

  constructor(switchBoard) {
    this.#switchBoard = switchBoard;
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

      if (instruction.name === "turn-on") {
        this.#switchBoard.turnOnLights(positions);
        return;
      };

      if (instruction.name === "turn-off") {
        this.#switchBoard.turnOffLights(positions);
        return;
      };

      if (instruction.name === "toggle") {
        this.#switchBoard.toggle(positions);
        return;
      };

    });
  }

  status() {
    return this.#switchBoard.status();
  }
}

exports.Light = Light;
exports.SwitchBoard = SwitchBoard;
exports.LightOperator = LightOperator