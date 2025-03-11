const db = require("../config/db");

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
module.exports = {
  searchForUsers,
  getUserByEmail,
};
