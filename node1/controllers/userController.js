require("dotenv").config();

const userModels = require("../models/userModel");
const db = require("../config/db");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

// register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModels.findUserByEmail(email);
    if (existingUser) {
      res.status(400).json({ error: "Email is already in use." });
    }

    //create the new user
    const newUser = await userModels.createUser(username, email, password);
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Failed to create new user", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModels.findUserByEmail(email);
    // if the email isn't found inform user
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    // if the passwords don't match return a 401.
    const matching = await bcrypt.compare(password, user.password);
    if (!matching) {
      return res.status(401).json({ error: "Invalid password or email" });
    }

    const token = jwt.sign(
      { userId: user.id, userEmail: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    // debugging purposes only v----------------------------v
    console.log({ usersId: user.id, usersEmail: user.email });
    res.status(200).json({ message: "Successfully logged in.", token });
  } catch (error) {
    console.error("Login failed: ", error);
    res.status(500).json({ error: "Internal server error" });
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

const userDeleted = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    await userModels.deleteUser(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports = {
  everyUser,
  registerUser,
  updateUserinfo,
  userDeleted,
  loginUser,
};
