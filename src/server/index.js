const debug = require("debug")("robottos:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const robottoRouter = require("./routers/robottoRouter");

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

app.use(morgan("dev"));
app.use(express.json());

app.use("/robottos", robottoRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = startServer;
