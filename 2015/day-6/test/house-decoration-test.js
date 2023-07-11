const { it, describe } = require("node:test");
const assert = require("assert");
const { Light, SwitchBoard, LightOperator } = require("../src/house-decoration");

describe("light", () => {
  it("should turn off in the start.", () => {
    const light = new Light();

    assert.ok(!light.isOn());
  });


  it("should turn on.", () => {
    const light = new Light();

    light.turnOn();

    assert.ok(light.isOn());
  });

  it("should turn off.", () => {
    const light = new Light();

    light.turnOn();
    light.turnOff();

    assert.ok(!light.isOn());
  });

  it("should toggle the state light.", () => {
    const light = new Light();

    light.toggle();
    assert.ok(light.isOn());

    light.toggle();
    assert.ok(!light.isOn());

  });


});

describe("switchBoard", () => {
  it("should turn on single light.", () => {
    const light = new Light();
    const switchBoard = new SwitchBoard([[light]]);

    switchBoard.turnOnLights([{ x: 0, y: 0 }]);

    assert.strictEqual(switchBoard.status(), 1)
  });

  it("should turn on lights.", () => {
    const light1 = new Light();
    const light2 = new Light();
    const switchBoard = new SwitchBoard([[light1, light2]]);

    switchBoard.turnOnLights([{ x: 0, y: 0 }, { x: 0, y: 1 }]);

    assert.strictEqual(switchBoard.status(), 2);
  });

  it("should turn off lights.", () => {
    const light1 = new Light();
    const light2 = new Light();
    const switchBoard = new SwitchBoard([[light1, light2]]);

    switchBoard.turnOnLights([{ x: 0, y: 0 }, { x: 0, y: 1 }]);
    switchBoard.turnOffLights([{ x: 0, y: 0 }, { x: 0, y: 1 }]);

    assert.strictEqual(switchBoard.status(), 0);
  });

  it("should turn toggle lights.", () => {
    const light1 = new Light();
    const light2 = new Light();
    const switchBoard = new SwitchBoard([[light1, light2]]);

    switchBoard.toggle([{ x: 0, y: 0 }, { x: 0, y: 1 }]);
    assert.strictEqual(switchBoard.status(), 2);

    switchBoard.toggle([{ x: 0, y: 0 }]);
    assert.strictEqual(switchBoard.status(), 1);
  });


});

describe("lightOperator", () => {
  it("should take instruction and operate light.", () => {
    const light1 = new Light();
    const light2 = new Light();
    const light3 = new Light();
    const light4 = new Light();
    const switchBoard = new SwitchBoard([[light1, light2], [light3, light4]]);
    const lightOperator = new LightOperator(switchBoard);
    const instructions = [{
      "name": "turn-on",
      "startCorner": { x: 0, y: 0 },
      "endCorner": { x: 1, y: 1 }
    }];

    lightOperator.operate(instructions);

    assert.strictEqual(lightOperator.status(), 4);
  });

});
