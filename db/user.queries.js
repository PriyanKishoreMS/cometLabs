const User = require("../models/user.model");

exports.createUser = async (name, email, password, role) => {
	try {
		const user = new User({
			name,
			email,
			password,
			role,
		});

		const savedUser = await user.save();

		return savedUser;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.getAllUsers = async (page, limit, sort, order, search) => {
	try {
		const users = await User.find({
			$or: [
				{ name: { $regex: search, $options: "i" } },
				{ email: { $regex: search, $options: "i" } },
			],
		})
			.select("-password")
			.sort({ [sort]: order })
			.skip(page * limit)
			.limit(limit);

		const total = await User.countDocuments({
			$or: [
				{ name: { $regex: search, $options: "i" } },
				{ email: { $regex: search, $options: "i" } },
			],
		});
		const totalPages = Math.ceil(total / limit);
		return {
			page: page + 1,
			users,
			totalPages,
		};
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

exports.findUser = async email => {
	try {
		const user = await User.findOne({ email });
		if (user) {
			return user;
		}
		return false;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.findEmail = async id => {
	try {
		const user = await User.findById(id);
		if (user) {
			return user.email;
		}
		return false;
	} catch (err) {
		throw new Error(err.message);
	}
};
