const crypto = require("node:crypto");
const password = "vijay@123";

//create handleHash function to generate hash and salt
const handleHash = (password) => {
  //generate salt from randomBytes crpto object
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return { salt, hash };
};

//Get salt and hash with password
const { salt, hash } = handleHash(password);

console.log("salt:", salt);
console.log("hash:", hash);

// create verifiedPassword
const verifyPassword = (password, salt, hash) => {
  const latestHash = crypto.scryptSync(password, salt, 64).toString("hex");
  if (latestHash === hash) {
    console.log("Password is valid..");
  } else {
    console.log("Invalid password..");
  }
};
verifyPassword(password, salt, hash); // return true if password is valid
verifyPassword('newPassword', salt, hash); // return false if password is Invalid
