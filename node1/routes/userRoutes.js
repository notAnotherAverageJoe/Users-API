const express = require("express");
const router = express.Router();
const { everyUser } = require("../controllers/userController");

router.get("/users", everyUser);

module.exports = router;
