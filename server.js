require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
var logger = require("morgan");
var mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const profile = require( './routes/API/items' );
app.use( '/API/items', profile );

app.use(logger("dev"));

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

let MONGOD_URI = process.env.MONGODB_URI || "mongodb://localhost/project-3";

mongoose.connect(MONGOD_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// npm install --save @okta/jwt-verifier

// const OktaJwtVerifier = require('@okta/jwt-verifier');

// const oktaJwtVerifier = new OktaJwtVerifier({
// 
//})
