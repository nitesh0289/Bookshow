const express = require("express");

const { getUser } = require("../controllers/user.controller");

const router = express.Router();

router.get("/all", getUser);

router.get("/", getUser);

router.post("/", getUser);

module.exports = router;
