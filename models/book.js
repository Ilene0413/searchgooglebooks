// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const bookSchema = new Schema({
	title: { type: String, required: true },
	authors: { type: [], required: true },
    description: { type: String },
    image : {type: String},
    infoLink: {type:String},
    user: ({type: String, required: true})
});

//Setting schema to variable
const Book = mongoose.model("Book", bookSchema);

//Exporting
module.exports = Book;