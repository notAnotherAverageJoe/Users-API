const express = require("express");
const { fetchPetsByUserId } = require("../controllers/petsController");

const router = express.Router();

router.get("/pets", fetchPetsByUserId);
