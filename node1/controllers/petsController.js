const db = require("../config/db");
const petsModel = require("../models/petModel");

const fetchPetsByUserId = async (req, res) => {
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
};

const createNewPet = async (req, res) => {
  try {
    const { petname, userId } = req.body;
    if (!petname || !userId) {
      return res.status(400).json({ error: "petname and user id is required" });
    }
    const newPet = await petsModel.addPet(petname, userId);
    res.status(200).json(newPet);
  } catch (error) {
    console.error("Failed to add new pet: ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { fetchPetsByUserId, createNewPet };
