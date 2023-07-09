const crypto = require('node:crypto')

const md5 = function (text) {
  return crypto.createHash("md5").update(text).digest("hex");
};

const getSecretNumber = function (secretKey, prifix) {
  let secretNumber = 0;
  let hashCodePrifix = "";

  while (hashCodePrifix !== prifix) {
    secretNumber++;
    const md5String = secretKey + secretNumber;

    const hashCode = md5(md5String);
    hashCodePrifix = hashCode.slice(0, prifix.length);

  }

  return secretNumber;
};

exports.getSecretNumber = getSecretNumber;