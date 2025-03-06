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

module.exports = { allUsers };
