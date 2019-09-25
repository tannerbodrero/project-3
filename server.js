const express = require("express");
const routes = require("./routes");
var logger = require("morgan");
var mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
//  issuer: 'https://{yourOktaDomain}/oauth/default/   required
//})

// oktaJwtVerifier.verifyAccessToken(accessTokenString, expectedAud)
// .then(jwt => {
   // the token is valid (per definition of 'valid' above)
//   console.log(jwt.claims);
// })
// .catch(err => {
   // a validation failed, inspect the error
// });


// Passing a string for expectedAud
//  oktaJwtVerifier.verifyAccessToken(accessTokenString, 'api://default')
//  .then(jwt => console.log('token is valid') )
//  .catch(err => console.warn('token failed validation') );

//  oktaJwtVerifier.verifyAccessToken(accessTokenString, [ 'api://special', 'api://default'] )
//  .then(jwt => console.log('token is valid') )
//  .catch(err => console.warn('token failed validation') );
