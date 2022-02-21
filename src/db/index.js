const debug = require("debug")("robottos:db:");
const chalk = require("chalk");
const { default: mongoose } = require("mongoose");

const connectDataBase = (dbCredentials) =>
  new Promise((resolve, reject) => {
    mongoose.connect(dbCredentials, (error) => {
      if (error) {
        reject(error);
      }

      debug(chalk.green("Connected to the DataBase"));
      resolve();
    });
  })();

mongoose.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    delete ret._id;
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    delete ret.__v;
  },
});

module.exports = connectDataBase;
