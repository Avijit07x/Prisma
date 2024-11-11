const prisma = require("../prisma");

const getUser = async (req, res) => {
	try {
		const user = await prisma.user.findMany();
		res.json({
			success: true,
			user,
			message: "Got user",
		});
	} catch (error) {
		res.json({
			success: false,
			message: "Error getting user",
			error: error.message,
		});
	}
};

const createUser = async (req, res) => {
	const { name, email, password } = req.body;
	console.log(name, email);
	try {
		const user = await prisma.user.create({
			data: {
				name,
				email,
				password,
			},
		});

		res.json({
			success: true,
			message: "Created user",
			user,
		});
	} catch (error) {
		res.json({
			success: false,
			message: "Error creating user",
			error: error,
		});
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { name, email, password } = req.body;
	try {
		const user = await prisma.user.update({
			where: { id },
			data: { name, email, password },
		});

		// If user is found and updated, return success response
		if (user) {
			return res.json({
				success: true,
				message: "User updated successfully",
				user,
			});
		}
	} catch (error) {
		// If the error is because the user was not found
		if (error.code === "P2025") {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
		// Handle other errors (like database errors, validation errors, etc.)
		return res.status(500).json({
			success: false,
			message: "An error occurred while updating the user",
			error: error,
		});
	}
};

module.exports = {
	getUser,
	createUser,
	updateUser,
};
