// server/routes/users.js
const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");

router.get("/", getAllUsers); // GET /api/users

module.exports = router;
