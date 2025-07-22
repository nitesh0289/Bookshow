const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  age: {
    type: Number,
    required: false
  },
  profileImage: {
    type: String,
    required: false,
    default: ""
  },
  lastLogin: {
    type: Date,
    default: new Date().toISOString()
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  },
  updatedAt: {
    type: Date,
    default: new Date().toISOString()
  }
});

const user = mongoose.model("User", userSchema);

module.exports = user;
