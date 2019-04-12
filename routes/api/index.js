// Dependencies
const router = require("express").Router();
const bookRoutes = require("./books");

// Item routes
router.use("/books", bookRoutes);

//Exporting
module.exports = router;