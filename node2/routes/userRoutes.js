const express = require("express");

const router = express.Router();
const {
  collectAllUsers,
  userFoundWithEmail,
} = require("../controllers/userControllers");

router.get("/users", collectAllUsers);
router.post("/users", userFoundWithEmail);

module.exports = router;
