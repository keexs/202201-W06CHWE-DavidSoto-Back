const jwt = require("jsonwebtoken");
const User = require("../../db/models/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    const error = new Error("User not found");
    error.code = 401;
    next(error);
  } else {
    const userData = {
      name: user.name,
      id: user.id,
    };

    const token = jwt.sign(userData, process.env.JWT_SECRET);
    res.json({ token });
  }
};

module.exports = loginUser;
