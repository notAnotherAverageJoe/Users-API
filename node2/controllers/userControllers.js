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
module.exports = {
  collectAllUsers,
};
