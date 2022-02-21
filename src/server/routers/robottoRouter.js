const express = require("express");
const { listRobottos } = require("./controllers/robottosController");

const router = express.Router();

router.get("/list", listRobottos);

module.exports = router;
