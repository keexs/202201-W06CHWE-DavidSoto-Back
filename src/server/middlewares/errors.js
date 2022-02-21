const debug = require("debug")("robottos:root");
const chalk = require("chalk");

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.bgRed.bold(`Error: ${err.message}`));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "Fallo critico, reinicia el PC";
  res.status(errorCode).json({ error: true, message: errorMessage });
};

const notFoundError = (req, res) => {
  res.status(404).json({ error: true, message: "Error 404" });
};

module.exports = { generalError, notFoundError };
