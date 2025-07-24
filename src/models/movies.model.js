const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    genres: { type: String, default: "" },
    duration: { type: Number, required: [true, "Duration is required!"], default: 0 },
    title: { type: String, required: [true, "Title is required!"] },
    trailer: { type: String, default: "" },
    thumbnailImage: { type: String, required: [true, "ThumbnailImage is required!"] },
    voteCount: { type: Number, default: 0 },
    languages: { type: String, default: "Hindi" },
    popularity: { type: Number, default: 0 },
    releasedDate: { type: Date, required: [true, "Release Date is required!"] },
    description: { type: String, default: "" },
    createdAt: { type: Date, default: new Date().toISOString() }
  },
  { collection: "movies" }
);

module.exports = mongoose.model("Movies", movieSchema);
