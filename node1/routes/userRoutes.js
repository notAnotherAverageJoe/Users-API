const express = require("express");
const router = express.Router();
const {
  everyUser,
  newUser,
  updateUserinfo,
  userDeleted,
} = require("../controllers/userController");

router.get("/users", everyUser);
router.post("/users", newUser);
router.patch("/users/:id", updateUserinfo);
router.delete("/users/:id", userDeleted);

module.exports = router;
