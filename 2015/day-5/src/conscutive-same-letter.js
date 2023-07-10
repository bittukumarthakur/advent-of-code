const isCointainConsecutiveSameLetter = function (text) {
  let previousLetter = "";

  for (let index = 0; index < text.length; index++) {
    const letter = text[index];

    if (letter === previousLetter) {
      return true;
    };

    previousLetter = letter;
  };

  return false;
};

exports.isContainConsecutiveSameLetter = isCointainConsecutiveSameLetter;