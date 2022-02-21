require("dotenv").config();
const debug = require("debug")("robottos:root");
const chalk = require("chalk");
const connectDataBase = require("./db");
const startServer = require("./server");

const port = process.env.SERVER_PORT || 6969;
const dbCredentials = process.env.DB_CREDENTIALS;

(async () => {
  try {
    await startServer(port);
    await connectDataBase(dbCredentials);
  } catch (error) {
    debug(chalk.red(`Error:`, error.message));
  }
})();
