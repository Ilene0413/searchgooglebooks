// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks",
	{ useNewUrlParser: true }
);

const bookSeed = [
	{
		title: "Flowers",
		authors: ["Gail Saunders-Smith"],
        description: "Simple text and photographs depict the parts of flowers and their pollination.", 
        image: "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72xK-tR89i1sNWs_W5wauulI3dP8XZYWptyeL0Z0z-xAOn_DtR-ohFN_TFmV1e6IHKS_RqT7NJC_-WvNnB0jWgdh4fs_ADht9TEuBnJvrWW4Ho6YP9QEoSFWs4A01Em368aak9V&source=gbs_api",
        infoLink: "https://play.google.com/store/books/details?id=ogs_KDUQLSsC&source=gbs_api",
        user: "ilene"
	},
	{		
    title: "The Last Romantic",
    authors: [
        "Mihai Eminescu",
        "Roy MacGregor-Hastie"
       ],
    description: "", 
    image: "http://books.google.com/books/content?id=XY1iAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",    
    infoLink: "http://books.google.com/books?id=XY1iAAAAMAAJ&dq=the+last+romantic&hl=&source=gbs_api",
    user: "ilene"
    },
    {title: "The Other Side of Midnight",
    authors: [
        "Sidney Sheldon"
       ],
    description: "", 
    image: "http://books.google.com/books/content?id=jzof4cVXdykC&printsec=frontcover&img=1&zoom=1&source=gbs_api",    
    infoLink: "http://books.google.com/books?id=jzof4cVXdykC&dq=the+other+side+of+midnight&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/THE_OTHER_SIDE_OF_MIDNIGHT.html?hl=&id=jzof4cVXdykC",
    user: "ellen"
	},
    {title: "The Very Hungry Caterpillar",
    authors: [
        "Eric Carle"
       ],
    description: "22 large cards w/art by Eric Carle. Preschool",
    image: "http://books.google.com/books/content?id=nbrhnQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    infoLink: "http://books.google.com/books?id=nbrhnQEACAAJ&dq=the+very+hungry+caterpillar&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Very_Hungry_Caterpillar.html?hl=&id=nbrhnQEACAAJ",
    user: "barry"
	},
    {title: "Good Night Moon",
    authors: [
        "forgot"
       ],
    description: "mom tells good night sotry Preschool",
    image: "http://books.google.com/books/content?id=nbrhnQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    infoLink: "http://books.google.com/books?id=nbrhnQEACAAJ&dq=the+very+hungry+caterpillar&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Very_Hungry_Caterpillar.html?hl=&id=nbrhnQEACAAJ",
    user: "barry"
	}

];


const userSeed = [
	{
		name: "Ilene",
		password: "test1"
	},
	{
		name: "Ellen",
		password: "test2"
    },
    {
		name: "Barry",
		password: "test3"
	}

];

db.Book.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

db.User.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});