const {
	createSubmission,
	getSubmissionStatus,
} = require("../services/sphereEngine.services");

exports.createSubmission = async (req, res) => {
	try {
		const { problemId, source, compilerId, tests } = req.body;
		const submissionData = {
			problemId,
			source,
			compilerId,
			tests,
		};
		const response = await createSubmission(submissionData);
		if (!response) {
			return res
				.status(400)
				.send({ msg: "Error in creating submission in Sphere Engine" });
		}
		const submissionId = response.id;
		const submission = await getSubmissionStatus(submissionId);
		res.json(submission);
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in creating submission", err: err.message });
	}
};
