const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
//.env
require("dotenv").config();
//db connection
require("./src/db");

//Global Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Local Modules
const { logMiddleware } = require("./src/middlewares");
const userRouter = require("./src/routers/user.route");
const movieRouter = require("./src/routers/movies.route");

//Middlewares
app.use(logMiddleware);

app.use(
  cors({
    origin: "https://bookshow-client-6dnu.onrender.com",
    credentials: true
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hello LPU");
});

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
// app.use("/bookings", bookingRouter);
// app.use("/reviews", reviewsRouter);

app.listen(3001, () => console.log("Server is running on 3001 Port!"));
