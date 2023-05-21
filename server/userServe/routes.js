const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");

router.get("/user", UserController.createUser);

module.exports = router