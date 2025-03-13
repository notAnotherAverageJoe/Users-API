const userModel = require("../models/userModels ");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await userModel.queryAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Failed to get users", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { fetchAllUsers };
