const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  everyUser,
  registerUser,
  updateUserinfo,
  userDeleted,
  loginUser,
} = require("../controllers/userController");

router.get("/users", authMiddleware, everyUser);
router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.patch("/users/:id", updateUserinfo);
router.delete("/users/:id", userDeleted);

module.exports = router;
