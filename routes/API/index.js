const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./user");

// Book routes
router.use("/items", itemRoutes);
router.use("./user", userRoutes);

module.exports = router;
