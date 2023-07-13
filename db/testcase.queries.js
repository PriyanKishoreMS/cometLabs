const Testcase = require("../models/testcase.model.js");

exports.createTestcaseInDb = async testcaseData => {
	try {
		console.log(testcaseData);
		const testcase = new Testcase(testcaseData);
		const savedTestcase = await testcase.save();
		return savedTestcase;
	} catch (err) {
		throw new Error(err.message);
	}
};
