const { readFileSync } = require("fs");
const { countStrings, isNiceString, isNicerString } = require("./src/nice-string");

const readSampleInput = () => {
  return readFileSync("./resources/sample.txt", "utf8");
}

const main = function () {
  const text = readSampleInput();

  // first part
  console.log("count of nice strings:", countStrings(isNiceString, text));

  // second part
  console.log("count of nicer strings:", countStrings(isNicerString, text));
};

main();