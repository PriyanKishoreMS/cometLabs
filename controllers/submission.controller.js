const {
	createSubmission,
	getSubmissionStatus,
} = require("../services/sphereEngine.services");

const { mailSubmissionResponse } = require("../services/nodeMailer.services");
const { findEmail } = require("../db/user.queries");

// @desc 	Create a submission in Sphere Engine, check for status and mail the response
// @route 	POST /api/createSubmission
// @access 	Private - Authenticated User
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
		const email = await findEmail(req.userId);
		await mailSubmissionResponse(email, submission);
		res.json({
			message: "Submission Created Successfully",
			mailStatus: "Mail Sent Successfully",
			submission,
		});
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send({ msg: "Error in creating submission", err: err.message });
	}
};
