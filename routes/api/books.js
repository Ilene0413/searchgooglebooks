// Dependencies
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
	.get(booksController.findAll)
	.post(booksController.create);

router.route("/saved")
	.get(booksController.findAll);

// Matches with "/api/books/:id"
router.route("/:id")
	.get(booksController.findById)
	.put(booksController.update)
	.delete(booksController.remove);

// Exporting
module.exports = router;