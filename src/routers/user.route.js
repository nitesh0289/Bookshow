const express = require("express");

const { createUser, loginUser, getLoggedUser } = require("../controllers/user.controller");

const router = express.Router();

const auth = require("../middlewares/auth.middleware");

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/me", auth, getLoggedUser);

module.exports = router;
