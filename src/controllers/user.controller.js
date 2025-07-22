const User = require("../models/user.model");

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

    const user = await User.create(userBody);
    if (user)
      res.status(201).json({
        success: true,
        result: "User registered successfully!"
      });
  } catch (error) {
    let errorMsg = error.message.split(":")[2].split(",")[0];
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
    if (!existingUser) {
      res.status(409).json({
        success: false,
        error: "User is not registered!"
      });
    }

    const isMatched = existingUser.password === password;
    if (!isMatched) {
      res.status(401).json({
        success: false,
        error: "Email or Password is wrong!"
      });
      return;
    }

    res.status(200).json({
      success: true,
      result: "User Logged in Successfully!"
    });
  } catch (error) {
    console.log({ error });
    res.status(400).json({
      error: error.message
    });
  }
}

module.exports = { createUser, loginUser };
