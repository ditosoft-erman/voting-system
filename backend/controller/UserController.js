const db = require('../models/main'); // Adjust the path based on your structure
const { Users, UserRoles } = db;

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      include: [{ model: UserRoles, as: 'role' }]
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id, {
      include: [{ model: UserRoles, as: 'role' }]
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
