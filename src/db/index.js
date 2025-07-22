const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(`${process.env.MONGODB_URI}/movie-app`)
  .then(() => console.log("Mongodb is connected!"))
  .catch((err) => console.log("Mongodb error: ", err));
