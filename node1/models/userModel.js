const db = require("../config/db");
const bcrypt = require("bcryptjs");

//db call for all users
async function allUsers() {
  try {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Failed to retrieve all users: ", error);
  }
}
//db call for creating a new user with authentication
async function createUser(username, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const results = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id, username, email",
      [username, email, hashedPassword]
    );
    return results.rows[0];
  } catch (error) {
    console.error("error creating user", error);
    throw new Error("Failed to create user");
  }
}
async function findUserByEmail(email) {
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const { rows } = await db.query(query, [email]);
    return rows[0];
  } catch (error) {
    console.error("Failed to find user with that email", error);
  }
}
// db call to edit a user
async function updateUser(id, userData) {
  try {
    const { username, email, password } = userData;
    const result = await db.query(
      "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
      [username, email, password, id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user: ", error);
  }
}
// db call for the deletion of a user
async function deleteUser(id) {
  try {
    await db.query("DELETE FROM users WHERE id = $1", [id]);
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user", error);
  }
}

module.exports = {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
};
