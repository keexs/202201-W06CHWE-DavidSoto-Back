const Robotto = require("../../db/models/Robotto");

const listRobottos = async (req, res, next) => {
  try {
    const robottos = await Robotto.find();
    res.json({ robottos });
  } catch (error) {
    next(error);
  }
};

const getRobotto = async (req, res, next) => {
  const { id } = req.params;
  try {
    const robotto = await Robotto.findOne(id);
    if (robotto) {
      res.json(robotto);
      return;
    }
    const error = new Error("Robotto not found");
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Bad id format or invalid id";
    error.code = 400;
    next(error);
  }
};

const createRobotto = async (req, res, next) => {
  const robotto = req.body;
  try {
    const newRobotto = await Robotto.create(robotto);
    res.status(201);
    res.json(newRobotto);
  } catch (error) {
    error.message = "Bad request leand how to create a Robotto noob";
    error.code = 400;
    next(error);
  }
};

const updateRobotto = async (req, res, next) => {
  const newRobotto = req.body;
  const { id } = req.params;

  try {
    const forUpdateRobotto = Robotto.replaceOne({ _id: id }, newRobotto, {
      runValidators: true,
    });
    if (forUpdateRobotto.modifiedCount === 0) {
      const error = new Error("Robotto was not modified correctly");
      error.code = 400;
      next(error);
    }
    res.json(newRobotto);
  } catch (error) {
    error.message = "Bad requested update";
    error.code = 400;
    next(error);
  }
};

const deleteRobotto = async (req, res, next) => {
  const { id } = req.params;

  try {
    const toDeleteRobotto = Robotto.findByIdAndDelete(id);
    if (toDeleteRobotto) {
      res.json(toDeleteRobotto.id);
    }
    const error = new Error("Robotto or ID not found");
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Bad request trying to delete a robotto";
    error.code = 400;
    next(error);
  }
};

module.exports = {
  listRobottos,
  getRobotto,
  createRobotto,
  updateRobotto,
  deleteRobotto,
};
