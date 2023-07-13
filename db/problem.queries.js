const Problem = require("../models/problem.model");

exports.addProblemToDb = async problemData => {
	try {
		const problem = new Problem(problemData);
		const savedProblem = await problem.save();
		return savedProblem;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.listMyproblemsFromDb = async (creatorId, page, limit, sort, order) => {
	try {
		const problems = await Problem.find({ creatorId })
			.sort({ [sort]: order })
			.skip(page * limit)
			.limit(limit);

		const totalProblems = await Problem.countDocuments({ creatorId });
		const totalPages = Math.ceil(totalProblems / limit);
		return {
			page: page + 1,
			problems,
			totalPages,
		};
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.listAllProblemsFromDb = async (page, limit, sort, order) => {
	try {
		const problems = await Problem.find({})
			.sort({ [sort]: order })
			.skip(page * limit)
			.limit(limit);

		const totalProblems = await Problem.countDocuments({});
		const totalPages = Math.ceil(totalProblems / limit);
		return {
			page: page + 1,
			problems,
			totalPages,
		};
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.getProblemByIDFromDb = async problemId => {
	try {
		const problem = await Problem.findOne({ problemId });
		return problem;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.updateProblemInDb = async (problemId, problemData) => {
	try {
		const problem = await Problem.findOneAndUpdate(
			{ problemId },
			{ $set: problemData },
			{ new: true }
		);
		return problem;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.deleteProblemFromDb = async problemId => {
	try {
		const problem = await Problem.findOneAndDelete({ problemId });
		return problem;
	} catch (err) {
		throw new Error(err.message);
	}
};
