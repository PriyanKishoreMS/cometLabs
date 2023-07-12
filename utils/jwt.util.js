const jwt = require("jsonwebtoken");
require("dotenv").config();
const ACCESS_SECRET = process.env.ACCESS_SECRET;

exports.generateAccessToken = (id, role) => {
	try {
		const accessToken = jwt.sign({ userId: id, role: role }, ACCESS_SECRET, {
			expiresIn: "1d",
		});

		return accessToken;
	} catch (err) {
		throw new Error(err.message);
	}
};
