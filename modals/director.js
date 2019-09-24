const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const directorShema = new Shema({
  name: String,
  genre: Number
});

module.exports = mongoose.model("Movie", directorShema);
