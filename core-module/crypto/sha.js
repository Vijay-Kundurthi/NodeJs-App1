const crypto = require("node:crypto");
const hash = crypto
  .createHash("sha256")
  .update("Hello, Vijay")
  .digest("hex");

console.log("SHA 256:", hash);
