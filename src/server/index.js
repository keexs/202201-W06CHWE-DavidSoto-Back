const debug = require("debug")("robottos:server");
const chalk = require("chalk");
const express = require("express");

const app = express();

const startServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.greenBright(`Server is up on port: ${port}`));
      resolve();
    });
    server.on("error", (error) => {
      debug(chalk.redBright(`The server is down due to error: ${error}`));
      reject(error);
    });
  });

module.exports = startServer;
