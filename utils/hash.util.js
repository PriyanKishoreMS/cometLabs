const bcrypt = require("bcryptjs");

exports.hash = async (string, rounds) => {
	try {
		const salt = await bcrypt.genSalt(rounds);
		const hashedString = await bcrypt.hash(string, salt);
		return hashedString;
	} catch (err) {
		console.error(err.message);
		return false;
	}
};
