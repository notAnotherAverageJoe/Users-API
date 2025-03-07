const db = require("../config/db");

// db call for any pets associated with users id
async function getPetByUserId(id) {
  try {
    const query = "SELECT * FROM pets WHERE user_id = $1";
    const result = await db.query(query, [id]);
    return result.rows;
  } catch (error) {
    console.error("Error fetching pets: ", error);
  }
}
async function addPet(petname, userId) {
  try {
    const query =
      "INSERT INTO pets (petname, user_id) VALUES($1,$2) RETURNING *";
    const result = await db.query(query, [petname, userId]);
    return result.rows[0]; // this returns the new pet
  } catch (error) {
    console.error("error adding new pet", error);
  }
}
module.exports = { getPetByUserId, addPet };
