const { getNubmerOfVowels } = require("./number-of-vowels.js");
const { isCointainConscutiveSameLetter } = require("./conscutive-same-letter.js")
const { isContainDisallowedSubstrings } = require("./disallowed-substrings.js")

const isNiceString = function (text) {
  const nuberOfVowels = getNubmerOfVowels(text);
  const isNotCointainConscutiveSameLetter = !isCointainConscutiveSameLetter(text);

  if (nuberOfVowels < 3) {
    return false;
  };

  if (isNotCointainConscutiveSameLetter) {
    return false;
  };

  if (isContainDisallowedSubstrings(text)) {
    return false;
  };

  return true;
};

exports.isNiceString = isNiceString;