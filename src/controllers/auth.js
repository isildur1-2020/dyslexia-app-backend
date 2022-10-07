const { Admin, Client } = require("../db/mongodb");
const { JWTsign } = require("../utils/jwt");

const signinController = async (req, res) => {
  try {
    const { username, password } = req.body;
    // IS ADMIN ?
    const adminFound = await Admin.findOne({ username, password });
    if (adminFound !== null) {
      const message = username + " Authenticated c:";
      console.log(message);
      const token = JWTsign({ username, isAdmin: true });
      return res.status(200).json({
        token,
        message,
        err: false,
      });
    }
    // IS CLIENT
    const clientFound = await Client.findOne({ username, password });
    if (clientFound !== null) {
      const message = username + " Authenticated c:";
      console.log(message);
      const token = JWTsign({ username, isAdmin: false });
      return res.status(200).json({
        token,
        message,
        err: false,
      });
    }
    return res.status(200).json({
      token: null,
      message: "Credenciales incorrectas",
      err: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      token: null,
      message: err,
      err: true,
    });
  }
};

module.exports = { signinController };
