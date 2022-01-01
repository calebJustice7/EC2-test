const express = require("express");
const path = require("path");
const app = express();

app.post("/api", (req, res) => {
	res.json({message: "success from server"});
});

app.use(express.static(path.join(__dirname, "client", "dist")));

app.listen(8000, () => {
	console.log("SERVER RUNNING");
});
