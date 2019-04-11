import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCAUXH5Qulh0wZXMIEB1g0KTwQ9G8OhBN4";
const FILTER = "&filter=free-ebooks";
const ORDER = "&orderBy=relevance"
const MAXRESULTS = "&maxResults=40";

export default {
	// Gets all items
	getBooks: function() {
		return axios.get("/api/books");
	},
	// Gets the item with the given id
	getBook: function(id) {
		return axios.get("/api/books/" + id);
	},
	// Deletes the item with the given id
	deleteBook: function(id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves an item to the database
	saveBook: function(bookData) {
		return axios.post("/api/books", bookData);
	},
	search: function(query) {
		let googleUrl = BASEURL + query + FILTER + ORDER + MAXRESULTS + APIKEY;
		return axios.get(googleUrl);
	  }
	
};