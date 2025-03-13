const db = require("../config/db");

async function queryAllUsers() {
  try {
    const query = "SELECT * FROM users";
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    console.error("Failed to fetch users", error);
  }
}

module.exports = {
  queryAllUsers,
};
