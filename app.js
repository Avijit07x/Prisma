const express = require("express");
const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
