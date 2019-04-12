//Dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
let PATH = process.env.NODE_ENV === "production" ? "../client/build/public/index.html" : "../client/public/index.html"
	res.sendFile(path.join(__dirname, PATH));
});

module.exports = router;