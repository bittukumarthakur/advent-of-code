const { getSecretNumber } = require("./src/get-secrect-number");


const main = () => {

  // first part
  const firsttKey = "ckczppom";
  const firstSecretNumber = getSecretNumber(firsttKey, "00000");
  console.log("first part:", firstSecretNumber);

  // second part
  const secondKey = "ckczppom";
  const secondSecretNumber = getSecretNumber(secondKey, "000000");
  console.log("second part", secondSecretNumber);
};

main();