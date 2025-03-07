const express = require("express");
const router = express.Router();
const { everyUser, newUser } = require("../controllers/userController");

router.get("/users", everyUser);
router.post("/users", newUser);

module.exports = router;
