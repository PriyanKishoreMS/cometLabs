const express = require("express");
const {
	getUsers,
	signUp,
	login,
	logout,
} = require("../controllers/user.controller");
const { auth } = require("../middlewares/jwt.middleware");
const router = express.Router();

router.route("/getusers").get(auth, getUsers);
router.route("/signUp").post(signUp);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
