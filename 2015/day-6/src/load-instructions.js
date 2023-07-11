const { readFileSync } = require("fs");

const loadInstructions = () => {
  const text = readFileSync("./resources/sample.txt", "utf-8")
  const lines = text.split("\n");

  return lines.map((line) => {
    const [name, start, _, end] = line.replace('turn ', 'turn-').split(" ");

    const [startX, startY] = start.split(",");
    const [endX, endY] = end.split(",");
    const startCorner = { x: +startX, y: +startY };
    const endCorner = { x: +endX, y: +endY };

    return { name, startCorner, endCorner };
  });
};

exports.loadInstructions = loadInstructions;