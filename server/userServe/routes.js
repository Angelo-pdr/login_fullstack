const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");

router.post("/user", UserController.createUser);
router.post("/login", UserController.LoginUser);

module.exports = router