const userModels = require("../models/userModel");
const db = require("../config/db");

// Get all users
const everyUser = async (req, res) => {
  try {
    const users = await userModels.allUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error("failed to retrieve users", error);
    res.status(500).json({ error: "error fetching users" });
  }
};

// Create a new user
const newUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModels.createUser(username, email, password);
    return res.status(200).json(user);
  } catch (error) {
    console.error("Failed to create new user", error);
    res.status(500).json({ error: "Error creating user" });
  }
};
// Patch for user to update information
const updateUserinfo = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const updatedUser = await userModels.updateUser(id, {
      username,
      email,
      password,
    });
    if (!updateUserinfo) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("failed to update user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { everyUser, newUser, updateUserinfo };
