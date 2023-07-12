const jwt = require("jsonwebtoken");
require("dotenv").config();
const ACCESS_SECRET = process.env.ACCESS_SECRET;

exports.auth = async (req, res, next) => {
	try {
		const accessToken = req.cookies.accessToken;
		if (!accessToken) {
			return res.status(401).json({ msg: "Unauthorized" });
		}
		const decoded = await jwt.verify(accessToken, ACCESS_SECRET);
		req.userId = decoded.userId;
		req.role = decoded.role;
		next();
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Error in auth middleware", err: err.message });
	}
};
