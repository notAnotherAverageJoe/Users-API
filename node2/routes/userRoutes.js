const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  collectAllUsers,
  userFoundWithEmail,
  registerUer,
  userLogin,
} = require("../controllers/userControllers");

router.get("/users", authMiddleware, collectAllUsers);
router.post("/users", userFoundWithEmail);
router.post("/users/register", registerUer);
router.post("/users/login", userLogin);

module.exports = router;
