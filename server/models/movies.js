const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const movieShema = new Shema({
  name: String,
  genre: String,
  directorId: String,
  rate: Number,
  watched: Boolean,
});

module.exports = mongoose.model("Movie", movieShema);
