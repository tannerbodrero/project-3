const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./user");
// const authCheck = require("./authentication")

// specific routes from
// localhost:PORT/api
router.use("/items", itemRoutes);

// since (for right now) we want to protect any and all information under the user routes.
router.use("/user", authCheck.authRequired, userRoutes);


module.exports = router;