const express = require("express");
const {
  getRobotto,
  listRobottos,
  createRobotto,
} = require("../controllers/robottosController");

const router = express.Router();

router.get("/list", listRobottos);
router.get("/robotto/id", getRobotto);
router.post("/newRobotto", createRobotto);

module.exports = router;
