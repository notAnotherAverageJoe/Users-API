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

module.exports = { allUsers, createUser };
