const express = require("express");
const app = express();
//.env
require("dotenv").config();
//db connection
require("./src/db");

//Global Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Local Modules
const { logMiddleware } = require("./src/middlewares");
const userRouter = require("./src/routers/user.route");

//Middlewares
app.use(logMiddleware);

app.use("/api/users", userRouter);
// app.use("/movies", moviesRouter);
// app.use("/bookings", bookingRouter);
// app.use("/reviews", reviewsRouter);

app.listen(3001, () => console.log("Server is running on 3001 Port!"));
