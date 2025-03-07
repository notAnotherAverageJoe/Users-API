const db = require("../config/db");

//db call for all users
async function allUsers() {
  try {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Failed to retrieve all users: ", error);
  }
}
//db call for creating a new user
async function createUser(username, email, password) {
  try {
    const results = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING *",
      [username, email, password]
    );
    return results.rows[0];
  } catch (error) {
    console.error("error creating user", error);
    throw new Error("Failed to create user");
  }
}

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

module.exports = { allUsers, createUser, updateUser };
