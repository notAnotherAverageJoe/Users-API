const userModels = require("../models/userModel");

const everyUser = async (req, res) => {
  try {
    const users = await userModels.allUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error("failed to retrieve users", error);
    res.status(500).json({ error: "error fetching users" });
  }
};
module.exports = { everyUser };
