const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");

async function createUser(req, res) {
  const userBody = req.body;

  try {
    if (!userBody) throw Error("User Body not exist!");

    const existingUser = await User.findOne({ email: userBody.email });
    if (existingUser) {
      res.status(409).json({
        success: false,
        result: "User already registered!"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(userBody.password, salt);
    userBody.password = hashPassword;

    const user = await User.create(userBody);
    if (user) {
      res.status(201).json({
        success: true,
        result: "User registered successfully!"
      });
      return;
    }
    res.status(500).json({
      success: false,
      result: "Something went wrong!"
    });
  } catch (error) {
    console.log({ error });
    let errorMsg = error.message?.split(":")[2]?.split(",")[0];
    res.status(400).json({
      error: errorMsg
    });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw Error("Login Details are required!");

    //Is Email Exists in DB
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({
        success: false,
        error: "User is not registered!"
      });

    const isMatched = await bcrypt.compare(password, existingUser.password); // true

    if (!isMatched)
      return res.status(401).json({
        success: false,
        error: "Email or Password is wrong!"
      });

    const payload = {
      userId: existingUser._id.toString()
    };
    const Auth_Token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie("auth-token", Auth_Token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60 * 1000,
      origin: "http://localhost:3000"
    });
    return res.status(200).json({
      success: true,
      result: "User Logged in Successfully!"
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
}

async function getLoggedUser(req, res) {
  const userid = req.token;

  try {
    if (!userid) throw Error("Not a logged in user!");
    const userId = new mongoose.Types.ObjectId(userid); //converting string to ObjectId Type
    const user = await User.findOne({ _id: userId });
    return res.status(200).json({
      success: true,
      result: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: "Something went wrong!"
    });
  }
}

async function logoutUser(req, res) {
  const userid = req.token;
  try {
    if (userid) {
      res.cookie("auth-token", "", {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 0,
        origin: "http://localhost:3000"
      });
      return res.status(200).json({ success: true, result: "Logout successfully!" });
    } else {
      return res.status(400).json({ success: false, result: "No user is logged in" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, result: "Something went wrong!" });
  }
}

module.exports = { createUser, loginUser, getLoggedUser, logoutUser };
