const mongoose = require("mongoose");

const testCaseSchema = new mongoose.Schema(
	{
		problemId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		input: {
			type: String,
			required: true,
		},
		output: {
			type: String,
			required: true,
		},
		timeLimit: {
			type: Number,
			required: true,
			default: 1,
		},
		judgeId: {
			type: Number,
			required: true,
		},
		active: {
			type: Boolean,
			required: true,
			default: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("TestCase", testCaseSchema);
