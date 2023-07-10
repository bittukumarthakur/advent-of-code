const { readFileSync } = require("fs");
const { isNiceString } = require("./src/isNiceString");

const readSampleInput = () => {
  return readFileSync("./resources/sample.txt", "utf8");
}

const main = function () {
  const text = readSampleInput();
  const lines = text.split("\n");

  // first part
  const niceStrings = lines.filter(isNiceString);
  console.log("number of nice strings are:", niceStrings.length);
};

main();