const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [5, "Name length is must be greater than or equal to 5"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email should be unique!"]
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [8, "Password length is must be equal or greater than 8"]
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
