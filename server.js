const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");
const connectMongoDB = require("./config/mongodb.config");

connectMongoDB();

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
