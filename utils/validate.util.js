exports.validatePassword = password => {
	if (password.length < 6) {
		return { msg: "Password must be at least 6 characters" };
	}
	return true;
};

exports.validateEmail = email => {
	const re = /\S+@\S+\.\S+/;
	if (!re.test(email)) {
		return { msg: "Please enter a valid email" };
	}
	return true;
};

exports.validateRole = role => {
	if (role !== "user" && role !== "admin") {
		return { msg: "Please enter a valid role" };
	}
	return true;
};
