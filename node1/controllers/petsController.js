const petsModel = require("../models/petModel");

const fetchPetsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    // id is needed
    if (!userId) {
      return res.status(400).json({ error: "User Id is required" });
    }
    //call to db for the query of pets with current user id
    const pets = await petsModel.getPetByUserId(userId);
    // if pets returns empty then the user has no pets
    if (pets.length === 0) {
      return res.status(404).json({ message: "No pets found for this user" });
    }
    res.json(pets);
  } catch (error) {
    console.error("Error fetching pets", error);
    return res.status(500).json({ error: "Internal server errors" });
  }
};

module.exports = { fetchPetsByUserId };
