const axios = require("axios");
require("dotenv").config();
const SE_API_ADDRESS = process.env.SE_API_ADDRESS;
const SE_API_KEY = process.env.SE_API_KEY;

exports.createProblemInSphere = async problemData => {
	try {
		console.log(problemData);
		const problem = await axios.post(
			`${SE_API_ADDRESS}/problems?access_token=${SE_API_KEY}`,
			JSON.stringify(problemData),
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const response = problem.data;
		return response;
	} catch (err) {
		if (err.response.status == 400) {
			console.log(err.response.data);
		}
	}
};

exports.ListAllProblemsFromSphere = async (limit, shortbody) => {
	try {
		const problems = await axios.get(
			`${SE_API_ADDRESS}/problems?access_token=${SE_API_KEY}&limit=${limit}&shortBody=${shortbody}`
		);
		const response = problems.data;
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.getProblemByIdFromSphere = async problemId => {
	try {
		const problem = await axios.get(
			`${SE_API_ADDRESS}/problems/${problemId}?access_token=${SE_API_KEY}`
		);
		const response = problem.data;
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.updateProblemInSphere = async (problemId, problemData) => {
	try {
		const problem = await axios.put(
			`${SE_API_ADDRESS}/problems/${problemId}?access_token=${SE_API_KEY}`,
			JSON.stringify(problemData),
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const response = problem.data;
		return response;
	} catch (err) {
		if (err.response.status == 400) {
			console.log(err.response.data);
		}
	}
};

exports.deleteProblemFromSphere = async problemId => {
	try {
		await axios.delete(
			`${SE_API_ADDRESS}/problems/${problemId}?access_token=${SE_API_KEY}`
		);
		return true;
	} catch (err) {
		throw new Error(err.message);
	}
};
