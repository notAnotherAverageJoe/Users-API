const express = require("express");
const {
  fetchPetsByUserId,
  createNewPet,
} = require("../controllers/petsController");

const router = express.Router();

router.get("/pets/:id", fetchPetsByUserId);
router.post("/pets", createNewPet);

module.exports = router;
