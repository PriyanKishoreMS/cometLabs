const {
	validatePassword,
	validateEmail,
	validateRole,
} = require("../utils/validate.util");
const { hash, compare } = require("../utils/hash.util");
const { generateAccessToken } = require("../utils/jwt.util");
const { createUser, checkUserExists, findUser } = require("../db/user.queries");

exports.getUsers = (req, res) => {
	res.send("Get Users");
};

exports.signUp = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;
		if (!name || !email || !password) {
			return res.status(400).json({ msg: "Please enter all fields" });
		}

		const emailValidated = validateEmail(email);
		if (emailValidated !== true) {
			return res.status(400).json({ msg: emailValidated.msg });
		}

		const passwordValidated = validatePassword(password);
		if (passwordValidated !== true) {
			return res.status(400).json({ msg: passwordValidated.msg });
		}

		const roleValidated = validateRole(role);
		if (roleValidated !== true) {
			return res.status(400).json({ msg: roleValidated.msg });
		}

		if (await checkUserExists(email)) {
			return res.status(400).json({ msg: "User already exists" });
		}

		const hashedPassword = await hash(password, 10);
		let savedUser = await createUser(name, email, hashedPassword, role);
		accessToken = generateAccessToken(savedUser._id, savedUser.role);
		res.cookie("accessToken", accessToken, { httpOnly: true });
		const response = {
			email: savedUser.email,
			accessToken: accessToken,
		};
		res.json(response);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Error registering User", err: err.message });
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ msg: "Please enter all fields" });
		}

		const emailValidated = validateEmail(email);
		if (emailValidated !== true) {
			return res.status(400).json({ msg: emailValidated.msg });
		}

		const user = await findUser(email);
		if (!user) {
			return res.status(400).json({ msg: "User does not exist" });
		}

		const isMatch = await compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ msg: "Invalid credentials" });
		}

		accessToken = generateAccessToken(user._id, user.role);
		res.cookie("accessToken", accessToken, { httpOnly: true });
		await user.save();
		const response = {
			email: user.email,
			accessToken: accessToken,
		};
		res.json(response);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Error logging in User", err: err.message });
	}
};

exports.logout = (req, res) => {
	res.clearCookie("accessToken");
	res.json({ msg: "Logged out" });
};
