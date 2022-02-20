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

module.exports = connectDataBase;
