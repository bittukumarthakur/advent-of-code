const { it, describe } = require("node:test");
const { strictEqual } = require("assert");
const { getSecretNumber } = require("../src/get-secrect-number.js");

describe("getSecrectNumber", () => {
  it("should return secrect code for advent coin that start with 5 zeros", () => {

    strictEqual(getSecretNumber("abcdef", "00000"), 609043);
    strictEqual(getSecretNumber("pqrstuv", "00000"), 1048970);
  });

  it("should return secrect code for advent coin that start with 6 zeros", () => {

    strictEqual(getSecretNumber("ckczppom", "000000"), 3938038);
  });
});