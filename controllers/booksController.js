//Importing models
const db = require("../models");

// Defining methods for the booksController
module.exports = {
	findAll: function(req, res) {
		db.Book.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	findById: function(req, res) {
		db.Book.find({ _id: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	create: function(req, res) {
		db.Book.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	update: function(req, res) {
		db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	remove: function(req, res) {
		db.Book.findById({ _id: req.params.id })
			.then(dbModel => dbModel.delete())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	}
};