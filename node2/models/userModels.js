const db = require("../config/db");

async function searchForUsers() {
  const userQuery = "SELECT * FROM users";
  const result = await db.query(userQuery);
  return result.rows;
}

module.exports = {
  searchForUsers,
};
