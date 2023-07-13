const express = require("express");
const {
	getUsers,
	signUp,
	login,
	logout,
} = require("../controllers/user.controller");
const { auth, adminAuth } = require("../middlewares/jwt.middleware");
const {
	createProblem,
	getAllProblemsFromSphere,
	getMyProblems,
	getAllProblemsFromDb,
	getProblemById,
	updateProblem,
	deleteProblem,
} = require("../controllers/problem.controller");

const { createTestcase } = require("../controllers/testcase.controller");

const { createSubmission } = require("../controllers/submission.controller");

const router = express.Router();

router.route("/getusers").get(auth, getUsers);
router.route("/signUp").post(signUp);
router.route("/login").post(login);
router.route("/logout").post(logout);

router.route("/createProblem").post(adminAuth, createProblem);
router
	.route("/getAllProblemsFromSphere")
	.get(adminAuth, getAllProblemsFromSphere);
router.route("/getMyProblems").get(adminAuth, getMyProblems);
router.route("/getAllProblemsFromDb").get(auth, getAllProblemsFromDb);
router.route("/getProblem/:problemId").get(auth, getProblemById);
router.route("/updateProblem/:problemId").put(adminAuth, updateProblem);
router.route("/deleteProblem/:problemId").delete(adminAuth, deleteProblem);

router.route("/createTestcase/:problemId").post(adminAuth, createTestcase);

router.route("/createSubmission").post(auth, createSubmission);

module.exports = router;
