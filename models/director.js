const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const directorShema = new Shema({
  name: String,
  genre: String,
});

module.exports = mongoose.model("Director", directorShema);
