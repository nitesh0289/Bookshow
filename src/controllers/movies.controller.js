const Movies = require("../models/movies.model.js");

async function getAllMovies(req, res) {
  const { page = 1, limit = 10 } = req.query;

  try {
    const skip = (page - 1) * limit;
    const response = await Movies.find(
      {},
      { title: 1, releaseDate: 1, duration: 1, thumbnailImage: 1, genres: 1 }
    )
      .skip(skip)
      .limit(limit);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error });
    res.status(400).json({
      error
    });
  }
}

async function getMovie(req, res) {}

async function searchMovie(req, res) {}

async function recommendedMovies(req, res) {}

module.exports = { getAllMovies, getMovie, searchMovie, recommendedMovies };
