const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const headerAuth = req.header("Authorization");
  if (!headerAuth) {
    const error = new Error("ivalid token");
    error.code = 401;
    next(error);
  } else {
    const token = headerAuth.replace("Bearer", "");
    jwt.verify(token, process.env.JWT_SECRET);
  }
};

module.exports = auth;
