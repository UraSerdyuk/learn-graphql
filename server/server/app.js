const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3005;

mongoose.connect(
  "mongodb+srv://testuser:testuser@cluster0-h5ob5.mongodb.net/graphql-tutorial?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(cors());

app.use(
  `/graphql`,
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const dbConection = mongoose.connection;
// dbConection.useDb('sample_airbnb?');

dbConection.on("error", err => console.log(`Connection error ${err}`));
dbConection.once("open", () => console.log("Connection to DB!"));

app.listen(PORT, err => {
  err ? console.log(error) : console.log("Server started");
});
