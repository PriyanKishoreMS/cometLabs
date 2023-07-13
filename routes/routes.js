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

// Public routes
router.route("/signUp").post(signUp);
router.route("/login").post(login);

// Private routes with admin authentication
router.route("/getUsers").get(adminAuth, getUsers);
router.route("/createProblem").post(adminAuth, createProblem);
router
	.route("/getAllProblemsFromSphere")
	.get(adminAuth, getAllProblemsFromSphere);
router.route("/getMyProblems").get(adminAuth, getMyProblems);
router.route("/updateProblem/:problemId").put(adminAuth, updateProblem);
router.route("/deleteProblem/:problemId").delete(adminAuth, deleteProblem);
router.route("/createTestcase/:problemId").post(adminAuth, createTestcase);

// Private routes with user authentication
router.route("/getAllProblemsFromDb").get(auth, getAllProblemsFromDb);
router.route("/getProblem/:problemId").get(auth, getProblemById);
router.route("/createSubmission").post(auth, createSubmission);
router.route("/logout").post(auth, logout);

module.exports = router;
