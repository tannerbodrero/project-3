const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");
const express = require("express");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const s3 = new aws.S3({
  accessKeyId: "AKIA2P7KGCKAO2C7MNCE",
  secretAccessKey: "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",
  Bucket: "garage-trader-bucket"
});

const imageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'garage-trader-bucket',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + "-" + Date.now().toString() + path.extname(file.originalname))
    }
  }),
  limits:{fileSize: 2000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single("itemImage");

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType( file, cb ){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
  // Check mime
  const mimetype = filetypes.test( file.mimetype );
 if( mimetype && extname ){
   return cb( null, true );
  } else {
   cb( 'Error: Images Only!' );
  }
 }

 /**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post( '/items-img-upload', ( req, res ) => {
  imageUpload( req, res, ( error ) => {
    // console.log( 'requestOkokok', req.file );
    // console.log( 'error', error );
    if( error ){
     console.log( 'errors', error );
     res.json( { error: error } );
    } else {
     // If File not found
     if( req.file === undefined ){
      console.log( 'Error: No File Selected!' );
      res.json( 'Error: No File Selected' );
     } else {
      // If Success
      const imageName = req.file.key;
      const imageLocation = req.file.location;
  // Save the file name into database into profile model
  res.json( {
       image: imageName,
       location: imageLocation
      } );
     }
    }
   });
  });

// these routes build from localhost:PORT/api/items
router.route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
