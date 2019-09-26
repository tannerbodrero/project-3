const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./user");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

// specific routes from
// localhost:PORT/api
router.use("/items", itemRoutes);
router.use("/user", userRoutes);

module.exports = router;



//  function middlewhere(req,res,next) {

//      if (authenticated) {
//          var token = req.headers.authenticated
//          next();
//         }
        
//         else {
//             res.redirect("/");
//         }
//     }

//     app.get("/", middlewhere(), function())