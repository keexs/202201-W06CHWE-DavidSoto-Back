const express = require("express");
const {
  getRobotto,
  listRobottos,
  createRobotto,
  updateRobotto,
} = require("../controllers/robottosController");

const router = express.Router();

router.get("/list", listRobottos);
router.get("/robotto/id", getRobotto);
router.post("/newRobotto", createRobotto);
router.put("/update", updateRobotto);

module.exports = router;
