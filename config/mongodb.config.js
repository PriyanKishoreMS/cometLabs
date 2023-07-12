const mongoose = require("mongoose");
require("dotenv").config();
const DB_URI = process.env.MONGO_URI;

const connectMongoDB = async () => {
	try {
		await mongoose.connect(DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (err) {
		console.log({ msg: "Error connecting to mongoDB", err: err.message });
		process.exit(1);
	}
};

module.exports = connectMongoDB;
