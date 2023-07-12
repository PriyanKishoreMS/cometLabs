const User = require("../models/user.model");
const { generateRefreshToken } = require("../utils/jwt.util");

exports.createUser = async (name, email, password, role) => {
	try {
		const user = new User({
			name,
			email,
			password,
			role,
		});

		const refreshToken = generateRefreshToken(user._id, user.role);

		user.refreshToken = refreshToken;

		const savedUser = await user.save();

		return savedUser;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.checkUserExists = async email => {
	try {
		const user = await User.findOne({ email });
		if (user) {
			return true;
		}
		return false;
	} catch (err) {
		throw new Error(err.message);
	}
};
