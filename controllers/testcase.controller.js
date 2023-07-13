const { createTestcaseInDb } = require("../db/testcase.queries.js");
const {
	createTestcaseInSphere,
} = require("../services/sphereEngine.services.js");

// @desc 	Create a testcase in Sphere Engine and add it to the database
// @route 	POST /api/createTestcase/:problemId
// @access 	Private - Admin
exports.createTestcase = async (req, res) => {
	try {
		const { problemId } = req.params;
		const { input, output, timeLimit, judgeId, active } = req.body;
		const testcaseData = {
			input,
			output,
			timeLimit,
			judgeId,
			active,
		};
		const testcaseInSphere = await createTestcaseInSphere(
			problemId,
			testcaseData
		);
		testcaseData.problemId = problemId;
		testcaseData.number = testcaseInSphere.number;
		const testcase = await createTestcaseInDb(testcaseData);
		res.status(200).json({
			message: "Testcase created successfully",
			testcase,
		});
	} catch (err) {
		res
			.status(400)
			.json({ success: false, message: "Testcase creation failed", err });
	}
};
