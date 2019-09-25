// const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: "https://dev-264100.okta.com/oauth2/default",
    // clientId: "clientId",
    // assertClaims: "if we want to specify claims"
});

const authCheck = {

    // oktaJwtVerifier: new OktaJwtVerifier({
    //     issuer: "https://dev-264100.okta.com/oauth2/default",
    // // clientId: "clientId",
    // // assertClaims: "if we want to specify claims"
    // }),

    // this is the middleware for protected routes
    authRequired(req, res, next) {

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
    }
}

module.exports = authCheck;

