const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");

const app = express();
const PORT = 3005;

mongoose.connect("mongodb+srv://testuser:testuser@cluster0-h5ob5.mongodb.net/test?retryWrites=true&w=majority");

app.use(
  `/graphql`,
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const dbConection = mongoose.connection;
dbConection.on('error',err=>console.log(`Connection error ${err}`));
dbConection.once('open',()=>console.log('Connection to DB!'));


app.listen(PORT, err => {
  err ? console.log(error) : console.log("Server started");
});
