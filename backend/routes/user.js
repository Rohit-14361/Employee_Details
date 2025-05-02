const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.get("/", (req, res) => {
  res.send("Welcome! From Server");
});

module.exports = router;
