const User = require("../models/user.model");

async function createUser(req, res) {
  const userBody = req.body;

  try {
    if (!userBody) throw Error("User Body not exist!");

    const user = await User.create(userBody);

    console.log({ user });
    res.status(201).json({
      success: true,
      result: "User registered successfully!"
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
}

module.exports = { createUser };
