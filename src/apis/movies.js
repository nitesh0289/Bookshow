import axios from "./_api";

export const getAllMovies = (page = 1, limit = 10) =>
  axios.get(`/movies/all?page=${page}&limit=${limit}`);
