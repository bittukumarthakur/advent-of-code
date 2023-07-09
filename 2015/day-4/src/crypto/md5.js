const crypto = require('node:crypto')

const main = function () {
  const md5 = crypto.createHash("md5",);
  console.log(md5.update("bittu").digest("hex"));
};

main()