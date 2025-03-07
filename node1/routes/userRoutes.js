const express = require("express");
const router = express.Router();
const {
  everyUser,
  newUser,
  updateUserinfo,
} = require("../controllers/userController");

router.get("/users", everyUser);
router.post("/users", newUser);
router.patch("/users/:id", updateUserinfo);

module.exports = router;
