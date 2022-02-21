const express = require("express");
const {
  getRobotto,
  listRobottos,
} = require("../controllers/robottosController");

const router = express.Router();

router.get("/list", listRobottos);
router.get("/robotto/id", getRobotto);

module.exports = router;
