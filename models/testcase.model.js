const mongoose = require("mongoose");

const testcaseSchema = new mongoose.Schema(
	{
		problemId: {
			type: Number,
			required: true,
		},
		number: {
			type: Number,
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

module.exports = mongoose.model("Testcase", testcaseSchema);
