const mongoose = require("mongoose");

// Schema taken according to the request parameters
// to create a problem in Sphere Engine
// https://docs.sphere-engine.com/problems/api/overview-version-4#createProblem
const problemSchema = new mongoose.Schema(
	{
		creatorId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		problemId: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		body: {
			type: String,
		},
		typeId: {
			type: Number,
			enum: [0, 1, 2, 4],
			default: 0,
		},
		masterjudgeId: {
			type: Number,
			required: true,
		},
		interactive: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Problem", problemSchema);
