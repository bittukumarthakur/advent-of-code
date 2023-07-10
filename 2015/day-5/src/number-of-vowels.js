
const isVowel = function (letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter);
};

const getNubmerOfVowels = function (text) {
  return [...text].filter(isVowel).length;
  // return [...text].reduce((NumberOfVowels, letter) => {
  //   if (isVowel(letter)) {
  //     return NumberOfVowels + 1;
  //   };

  //   return NumberOfVowels;
  // }, 0)
};

exports.getNubmerOfVowels = getNubmerOfVowels;