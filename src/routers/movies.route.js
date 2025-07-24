const express = require("express");

const {
  searchMovie,
  getAllMovies,
  recommendedMovies
} = require("../controllers/movies.controller");

const router = express.Router();

router.get("/all", getAllMovies);
router.get("/", searchMovie);
router.get("/recommended", recommendedMovies);

module.exports = router;
