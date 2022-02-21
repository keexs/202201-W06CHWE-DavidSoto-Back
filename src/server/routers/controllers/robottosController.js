const Robotto = require("../../../db/models/Robotto");

const listRobottos = async (req, res, next) => {
  try {
    const robottos = await Robotto.find();
    res.json({ robottos });
  } catch (error) {
    next(error);
  }
};

module.exports = { listRobottos };
