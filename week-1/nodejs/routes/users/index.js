const express = require("express");
const AsyncHandler = require("express-async-handler");
const router = express.Router();

const UsersController = require("../../controllers/users");

router.get("/", AsyncHandler(UsersController.getAllUsers));
router.get("/:id", AsyncHandler(UsersController.getUserById));
router.post("/", AsyncHandler(UsersController.createUser));
router.put("/:id", AsyncHandler(UsersController.updateUserById));
router.delete("/:id", AsyncHandler(UsersController.deleteUserById));

module.exports = router;
