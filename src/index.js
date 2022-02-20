const debug = require("debug")("robottos:root");
require("dotenv").config();
const chalk = require("chalk");
const startServer = require("./server");

const port = process.env.SERVER_PORT || 6969;

(async () => {
  try {
    await startServer(port);
  } catch (error) {
    debug(chalk.red(`Error:`, error.message));
  }
})();
