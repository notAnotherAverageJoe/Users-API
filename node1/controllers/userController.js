const userModels = require("../models/userModel");

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

const updateUserinfo = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const result = await db.query(
      "UPDATE users SET email = $1, email = $2, password = $3 RETURNING *",
      [username, email, password]
    );
  } catch (error) {
    console.error("failed to update user", error);
  }
};

module.exports = { everyUser, newUser, updateUserinfo };
