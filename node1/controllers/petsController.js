const petsModel = require("../models/petModel");
async function fetchPetsByUserId(req, res) {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const pets = await petsModel.getPetByUserId(userId);

    if (pets.length === 0) {
      return res.status(404).json({ message: "No pets found for this user" });
    }

    res.json(pets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { fetchPetsByUserId };
