const express = require("express");
const {
	getUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/user", getUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
