const express = require("express");
const loginUser = require("../controllers/usersController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/auth", auth, loginUser);

module.exports = router;
