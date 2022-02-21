const { model, Schema } = require("mongoose");

const RobottoModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  stats: {
    power: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    endurance: {
      type: Number,
      required: true,
    },
  },
});

const Robotto = model("robotto", RobottoModel, "Robottos");

module.exports = Robotto;
