const express = require("express");
const { getUsers } = require("../controllers/user.controller");
const router = express.Router();

router.route("/getusers").get(getUsers);

module.exports = router;
