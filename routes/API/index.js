const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./user");

// specific routes from
// localhost:PORT/api
router.use("/items", itemRoutes);
router.use("/user", userRoutes);

module.exports = router;



 function middlewhere(req,res,next) {

     if (authenticated) {
         var token = req.headers.authenticated
         next();
        }
        
        else {
            res.redirect("/");
        }
    }