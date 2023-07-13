const jwt = require("jsonwebtoken");
const ACCESS_SECRET = process.env.ACCESS_SECRET;

// @desc    Middleware to check if user is authenticated
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

// @desc    Middleware for admin authentication
exports.adminAuth = async (req, res, next) => {
	try {
		const accessToken = req.cookies.accessToken;
		if (!accessToken) {
			return res.status(401).json({ msg: "Unauthorized" });
		}
		const decoded = await jwt.verify(accessToken, ACCESS_SECRET);
		req.userId = decoded.userId;
		req.role = decoded.role;
		if (req.role !== "admin") {
			return res.status(401).json({ msg: "Unauthorized" });
		}
		next();
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.json({ msg: "Error in admin auth middleware", err: err.message });
	}
};
