const jwt = require("jsonwebtoken");
require("dotenv").config();
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

exports.generateAccessToken = (id, role) => {
	try {
		const accessToken = jwt.sign({ userId: id, role: role }, ACCESS_SECRET, {
			expiresIn: "1m",
		});

		return accessToken;
	} catch (err) {
		throw new Error(err.message);
	}
};

exports.generateRefreshToken = (id, role) => {
	try {
		const refreshToken = jwt.sign({ userId: id, role: role }, REFRESH_SECRET, {
			expiresIn: "1d",
		});

		return refreshToken;
	} catch (err) {
		throw new Error(err.message);
	}
};
