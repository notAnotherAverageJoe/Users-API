const express = require("express");

const router = express.Router();
const { collectAllUsers } = require("../controllers/userControllers");

router.get("/users", collectAllUsers);

module.exports = router;
