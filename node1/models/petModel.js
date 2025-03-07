const db = require("../config/db");

async function getPetByUserId(id) {
  try {
    const query = "SELECT * FROM pets WHERE user_id = $1";
    const result = await db.query(query, [id]);
    return result.rows;
  } catch (error) {
    console.error("Error fetching pets: ", error);
  }
}
module.exports = { getPetByUserId };
