// Dependencies
const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");

// Item routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);

//Exporting
module.exports = router;