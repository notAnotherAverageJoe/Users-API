const userModels = require("../models/userModels");

const collectAllUsers = async (req, res) => {
  try {
  } catch (error) {
    console.error("Failed to collect all users", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
