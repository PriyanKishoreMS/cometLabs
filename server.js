const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const connectMongoDB = require("./config/mongodb.config");
const cookieParser = require("cookie-parser");

dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

app.get("/", (req, res) => {
	res.send("CometLabs Coding Platform API");
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
