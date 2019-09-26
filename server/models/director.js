const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const directorShema = new Shema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Director", directorShema);
