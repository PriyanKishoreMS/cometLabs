const express = require("express");
const { getUsers, signUp } = require("../controllers/user.controller");
const router = express.Router();

router.route("/getusers").get(getUsers);
router.route("/signUp").post(signUp);
// router.route("/login").post(login);

module.exports = router;
