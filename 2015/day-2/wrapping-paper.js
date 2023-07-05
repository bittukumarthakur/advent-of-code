const prismArea = function (dimension) {
  const [l, w, h] = dimension;
  return (2 * l * w) + (2 * w * h) + (2 * h * l);
};

const areaOfSmallestSide = function (dimension) {
  const [smallestSide, secondSmallestSide, _] = dimension.sort((a, b) => a - b);
  return smallestSide * secondSmallestSide;
};

const wrappingPaper = function (dimension) {
  const area = prismArea(dimension);
  const smallestSideArea = areaOfSmallestSide(dimension);
  return area + smallestSideArea;
};

const sum = function (numbers) {
  return numbers.reduce((total, number) => {
    return total + number;
  }, 0)
};

const ribbonLength = function (dimension) {
  const [smallestSide, secondSmallestSide, largestSide] = dimension.sort((a, b) => a - b);
  const sideRibbon = smallestSide + smallestSide + secondSmallestSide + secondSmallestSide;
  const bowRibbon = smallestSide * secondSmallestSide * largestSide;

  return sideRibbon + bowRibbon;
};

const main = function () {
  const fs = require("fs");
  const rawDimension = fs.readFileSync("raw-dimensions.txt", "utf8");

  const lines = rawDimension.trim().split("\n");

  const dimensions = lines.map((line) => {
    const [l, w, h] = line.split("x");
    return [+l, +w, +h];

  });

  const requiredWrappingPaper = dimensions.map(wrappingPaper);
  console.log("wrapping-paper", sum(requiredWrappingPaper));

  const requiredRibbon = dimensions.map(ribbonLength);
  console.log("ribbon", sum(requiredRibbon));
};

main();