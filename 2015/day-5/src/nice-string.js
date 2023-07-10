const { getNubmerOfVowels } = require("./number-of-vowels.js");
const { isContainConsecutiveSameLetter } = require("./conscutive-same-letter.js")
const { areContainDisallowedSubstrings } = require("./disallowed-substrings.js");

const isNiceString = function (text) {

  if (getNubmerOfVowels(text) < 3) {
    return false;
  };

  if (!isContainConsecutiveSameLetter(text)) {
    return false;
  };

  if (areContainDisallowedSubstrings(text)) {
    return false;
  };

  return true;
};

const countStrings = (condition, text) => {
  const lines = text.split("\n");
  const niceStrings = lines.filter(condition);

  return niceStrings.length;
};

const isPairOfLettersThatAppearsTwice = (text) => {
  return text.match(/(.)(.).*\1\2/g) !== null
};

const isOneLetterBetweenTwoSameLetter = (text) => {
  return text.match(/(.).\1/g) !== null
};

const isNicerString = (text) => {
  if (!isPairOfLettersThatAppearsTwice(text)) {
    return false;
  };

  if (!isOneLetterBetweenTwoSameLetter(text)) {
    return false;
  };

  return true;
};

exports.isNiceString = isNiceString;
exports.countStrings = countStrings;
exports.isNicerString = isNicerString