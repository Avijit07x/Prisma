const express = require("express");
const {
	getUser,
	createUser,
	updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/user", getUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);

module.exports = router;
