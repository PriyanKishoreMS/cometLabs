const {
	createProblemInSphere,
	ListAllProblemsFromSphere,
	getProblemByIdFromSphere,
	updateProblemInSphere,
	deleteProblemFromSphere,
} = require("../services/sphereEngine.services");
const {
	addProblemToDb,
	listMyproblemsFromDb,
	listAllProblemsFromDb,
	getProblemByIDFromDb,
	updateProblemInDb,
	deleteProblemFromDb,
} = require("../db/problem.queries");

exports.createProblem = async (req, res) => {
	try {
		const { name, body, typeId, masterjudgeId, interactive } = req.body;
		const creatorId = req.userId;
		const problemData = {
			name,
			body,
			typeId,
			masterjudgeId,
			interactive,
		};
		const response = await createProblemInSphere(problemData);
		if (!response) {
			return res
				.status(400)
				.send({ msg: "Error in creating problem in Sphere Engine" });
		}
		const problemId = response.id;
		problemData.creatorId = creatorId;
		problemData.problemId = problemId;
		const problem = await addProblemToDb(problemData);

		res.json({ problem, message: "Problem created successfully" });
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in creating problem", err: err.message });
	}
};

exports.getAllProblemsFromSphere = async (req, res) => {
	try {
		const limit = parseInt(req.query.limit) || 10;
		const shortbody = req.query.shortbody || false;
		const response = await ListAllProblemsFromSphere(limit, shortbody);
		res.json(response);
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in getting problems", err: err.message });
	}
};

exports.getMyProblems = async (req, res) => {
	try {
		const creatorId = req.userId;
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 10;
		const sort = req.query.sort || "createdAt";
		const order = req.query.order || "desc";
		const problems = await listMyproblemsFromDb(
			creatorId,
			page,
			limit,
			sort,
			order
		);
		res.json(problems);
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in getting problems", err: err.message });
	}
};

exports.getAllProblemsFromDb = async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 10;
		const sort = req.query.sort || "createdAt";
		const order = req.query.order || "desc";
		const problems = await listAllProblemsFromDb(page, limit, sort, order);
		res.json(problems);
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in getting problems", err: err.message });
	}
};

exports.getProblemById = async (req, res) => {
	try {
		const problemId = req.params.problemId;
		const dbData = await getProblemByIDFromDb(problemId);
		if (!dbData) {
			return res.status(404).send({ msg: "Problem not found" });
		}
		const sphereData = await getProblemByIdFromSphere(problemId);
		if (!sphereData) {
			return res.status(404).send({ msg: "Problem not found" });
		}
		res.json({ dbData, sphereData });
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in getting problem by id", err: err.message });
	}
};

exports.updateProblem = async (req, res) => {
	try {
		const problemId = req.params.problemId;
		const { name, body, typeId, masterjudgeId, interactive } = req.body;
		const problemData = {
			name,
			body,
			typeId,
			masterjudgeId,
			interactive,
		};
		const response = await updateProblemInSphere(problemId, problemData);
		if (!response) {
			return res
				.status(400)
				.send({ msg: "Error in updating problem in Sphere Engine" });
		}
		const problem = await updateProblemInDb(problemId, problemData);
		if (!problem) {
			return res
				.status(404)
				.send({ msg: "Error in updating problem in database" });
		}
		res.json({ problem, message: "Problem updated successfully" });
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in updating problem", err: err.message });
	}
};

exports.deleteProblem = async (req, res) => {
	try {
		const problemId = req.params.problemId;
		const response = await deleteProblemFromSphere(problemId);
		if (!response) {
			return res
				.status(400)
				.send({ msg: "Error in deleting problem from Sphere Engine" });
		}
		const problem = await deleteProblemFromDb(problemId);
		if (!problem) {
			return res
				.status(404)
				.send({ msg: "Error in deleting problem from database" });
		}
		res.json({ problem, message: "Problem deleted successfully" });
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in deleting problem", err: err.message });
	}
};
