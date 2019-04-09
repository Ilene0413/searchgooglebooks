import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCAUXH5Qulh0wZXMIEB1g0KTwQ9G8OhBN4";
const FILTER = "&filter=full";
const ORDER = "&orderBy=newest";

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
		console.log(`savebooks`, bookData)
		return axios.post("/api/books", bookData);
	},
	search: function(query) {
		console.log (`in api search`, query);
		let googleUrl = BASEURL + query + FILTER + ORDER + APIKEY;
		console.log(`google url`, googleUrl);
		return axios.get(googleUrl);
	  }
	
	// // Gets all users with given name
	// checkLogin: function(name) {
	// 	return axios.get("/api/users/?name=" + name);
	// },
	// // Creates new user
	// createUser: function(userData) {
	// 	return axios.post("/api/users/", userData);
	// }
};