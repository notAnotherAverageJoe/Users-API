const userModels = require("../models/userModels");

const collectAllUsers = async (req, res) => {
  try {
    const users = await userModels.searchForUsers();
    res.json(users);
  } catch (error) {
    console.error("Failed to collect all users", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const userFoundWithEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email required" });
    }
    const user = await userModels.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.json({ user });
  } catch (error) {
    console.error("failed to find user with that email", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  collectAllUsers,
  userFoundWithEmail,
};
