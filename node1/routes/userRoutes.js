const express = require("express");
const router = express.Router();
const {
  everyUser,
  registerUser,
  updateUserinfo,
  userDeleted,
  loginUser,
} = require("../controllers/userController");

router.get("/users", everyUser);
router.post("/users", registerUser);
router.post("/users", loginUser);
router.patch("/users/:id", updateUserinfo);
router.delete("/users/:id", userDeleted);

module.exports = router;
