const { JWTverify } = require("../utils/jwt");

const isAdmin = (req, res, next) => {
  const token = req.headers?.authorization;
  const payload = JWTverify(token);
  if (payload === undefined)
    return res.status(200).json({
      err: true,
      message: "Token malformed",
    });
  const isAdmin = payload?.isAdmin;
  if (!isAdmin)
    return res.status(200).json({
      err: true,
      message: "You aren't admin",
    });
  next();
};

const isUser = (req, res, next) => {
  const token = req.headers?.authorization;
  const payload = JWTverify(token);
  if (payload === undefined)
    return res.status(200).json({
      err: true,
      message: "Token malformed",
    });
  const isAdmin = payload?.isAdmin;
  if (isAdmin)
    return res.status(200).json({
      err: true,
      message: "You aren't user",
    });
  next();
};

module.exports = { isAdmin, isUser };
