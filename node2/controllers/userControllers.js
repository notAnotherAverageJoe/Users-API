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

const registerUer = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModels.userFoundWithEmail(email);
    if (existingUser) {
      console.log("email aleady in use");
    }
    const newUser = await userModels.createUser(username, email, password);
    return res
      .status(201)
      .json({ message: "Successfully created new user", user: newUser });
  } catch (error) {
    console.error("Failed to create user", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  collectAllUsers,
  userFoundWithEmail,
  registerUer,
};
