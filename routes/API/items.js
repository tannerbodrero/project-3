const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");


router.route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
