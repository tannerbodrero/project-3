const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./user");
const OktaJwtVerifier = require("@okta/jwt-verifier");

// specific routes from
// localhost:PORT/api
router.use("/items", itemRoutes);

// since (for right now) we want to protect any and all information under the user routes.
router.use("/user", authenticationRequired, userRoutes);

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: "https://dev-264100.okta.com/oauth2/default",
    // clientId: "clientId",
    // assertClaims: "if we want to specify claims"
});


// this is the middleware for protected routes
function authenticationRequired(req,res,next) {

    const authHeader = req.headers.authorization || " ";
    const match = authHeader.match(/Bearer (.+)/);

    if (!match) {
        res.status(401);
        return next("unauthorized");
    }

    const accessToken = match[1];

    oktaJwtVerifier.verifyAccessToken(accessToken)
        .then(jwt => {
            // the token is valid and attached to req.jwt
            req.jwt = jwt;
            // executes function 'next' 
            next();
        })
        .catch(err => {
            console.log(err)
        });
};

module.exports = router;
