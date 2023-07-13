const EMAIL_ID = process.env.EMAIL_ID;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const nodemailer = require("nodemailer");

exports.mailSubmissionResponse = async (email, submission) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "hotmail",
			auth: {
				user: EMAIL_ID,
				pass: EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: EMAIL_ID,
			to: email,
			subject: "Submission Response",
			html: `<h2>Submission Response to problem ${submission.problem.name}</h2>
			<p>This is a reply to your submission id ${submission.problem.id}</p></br>
			<p>Submission Status: ${submission.result.status.name}</p></br>
			<p>Your Code has been successfully Submitted!</p>
			`,
		};

		console.log(submission.result.streams.source);
		const info = await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		return info;
	} catch (err) {
		throw new Error(err.message);
	}
};
