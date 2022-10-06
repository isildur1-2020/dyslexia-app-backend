const jwt = require("jsonwebtoken");

const JWTsign = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
  } catch (err) {
    console.log(err);
  }
};

const JWTverify = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  JWTsign,
  JWTverify,
};
