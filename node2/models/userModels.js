const db = require("../config/db");
const bcrypt = require("bcryptjs");

async function searchForUsers() {
  const userQuery = "SELECT * FROM users";
  const result = await db.query(userQuery);
  return result.rows;
}

async function getUserByEmail(email) {
  const emailQuery = "SELECT * FROM users WHERE email = $1";
  const results = await db.query(emailQuery, [email]);
  return results.rows[0];
}

async function createUser(username, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserQuery =
      "INSERT INTO users (username, email, password) VALUES($1,$2,$3) RETURNING id, username, email";
    const result = await db.query(newUserQuery, [
      username,
      email,
      hashedPassword,
    ]);
    return result.rows[0];
  } catch (error) {
    console.error("Failed to create new user", error);
  }
}

module.exports = {
  searchForUsers,
  getUserByEmail,
  createUser,
};
