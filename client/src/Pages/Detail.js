import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListBook } from "../components/List";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ViewBtn from "../components/ViewBtn/ViewBtn";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
import Viewbook from "../components/Viewbook";

import API from "../Utils/API";

class Detail extends Component {
	state = {
		view: false,
		books: [{}],
		id:"",
		title: "",
        authors: [],
        description: "",
        image: "",
        infoLink: "",
        user: ""

	};
	// When this component mounts, grab the item with the _id of this.props.match.params.id
	// e.g. localhost:3000/books/599dcb67f0f16317844583fc
	componentDidMount() {
		this.loadBooks();
	};

	viewBook = id => {
		API.getBooks(id)
		.then(res => {
			this.setState({
				books: res.data,
				id: id,
				title: res.data.title,
				authors: res.data.authors,
				description: res.data.description,
				image: res.data.image,
				infoLink: res.data.infoLink,
				view: true,
				user: "Ilene"
			})
		}
			
		)
		.catch(err => console.log(err));

        //id is returned as a string, so need to convert to integer to determine which book was clicked
        // let id = parseInt(event.target.id);
        // let books = [...this.state.books];
        // let view = true;
        // console.log(`in view book  this state.view`, this.state.view)
        // this.setState({
        //     title: books[id].title,
        //     authors: books[id].authors,
        //     description: books[id].description,
        //     image: books[id].image,
        //     infoLink: books[id].infoLink,
        //     view: true

        // })
        console.log(`after set state view book`, this.state.view);
        // view = false;
    };

	deleteBook = id => {
		console.log(`delete book`, id);
		API.deleteBook(id)
			.then(res => this.loadBooks())
			.catch(err => console.log(err));
	};

	loadBooks = () => {
		console.log(`in load books`);
		API.getBooks()
			.then(res =>
				this.setState({
					books: res.data,
					title: "",
					authors: [],
					id:""
					// description: "",
					// image: "",
					// infoLink: "",
					// user: "Ilene"
				})
			)
			.catch(err => console.log(err));
	}


	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1>Books On My List</h1>
						</Jumbotron>
						{this.state.books.length ? (
							<List>
								{console.log(`this.state.book`, this.state.books)}
								{this.state.books.map((book, index) => (
									console.log(`in list books`, this.state.view, index),
									console.log(`this.state.id`, this.state.id),
									console.log(`list ${book._id}, state value ${JSON.stringify(this.state.books[index]._id)}`),
									<ListBook key={book._id}>
										title = {book.title},
										authors = {book.authors}
										{this.state.view && this.state.id === book._id ? 
                                            <Viewbook>
                                                description = {book.description},
                                                image = {book.image}
                                                infoLink = {book.infoLink}
                                            </Viewbook> : null}
                                        <ViewBtn id={index} onClick={() => this.viewBook(book._id)}></ViewBtn>
										<DeleteBtn onClick={() => this.deleteBook(book._id)} />
									</ListBook>
								))}
							</List>
						) : (
								<h3>no books to display</h3>
							)}
					</Col>
				</Row>
				<Row>
					<Col size="md-2">
						<Link to="/">
							← Back to search
						</Link>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Detail;