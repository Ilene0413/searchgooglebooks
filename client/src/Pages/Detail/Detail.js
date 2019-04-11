import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import ViewBtn from "../../components/ViewBtn";
import Viewbook from "../../components/Viewbook";
import Pictureborder from "../../components/Pictureborder";
import API from "../../Utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListBook } from "../../components/List";



class Detail extends Component {
	state = {
		view: false,
		books: [{}],
		id: "",
		title: "",
		authors: [],
		description: "",
		image: "",
		infoLink: ""

	};
	// When this component mounts, get all the saved books
	componentDidMount() {
		this.loadBooks();
	};
	// this function views additional information about a book
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
					view: true
				})
			}
			)
			.catch(err => console.log(err));
	};
	// this function deletes a book from the mongo db
	deleteBook = id => {
		API.deleteBook(id)
			.then(res => this.loadBooks())
			.catch(err => console.log(err));
	};
	//this function retrieves all the saved books from the mongo database and loads them on page
	loadBooks = () => {
		API.getBooks()
			.then(res =>
				this.setState({
					books: res.data,
					title: "",
					authors: [],
					id: ""
				})
			)
			.catch(err => console.log(err));
	}


	render() {
		return (
			<Container fluid>
				<Row>
					<Pictureborder></Pictureborder>
				</Row>
				<Row>
					<Col size="sm-12">
						<Jumbotron>
							<h1>Books On My List</h1>
						</Jumbotron>
					</Col>
					<Pictureborder></Pictureborder>

				</Row>
				<Row>
					<Col size="sm-12">
					<p></p>
					<h2>Results</h2>
					<p></p>
						{this.state.books.length ? (
							<List>
								{this.state.books.map((book, index) => (
									<ListBook key={book._id}
										title={book.title}
										authors={book.authors}
										image={book.image}
									>
										{this.state.view && this.state.id === book._id ?
											<Viewbook
												description={book.description}
												infoLink={book.infoLink}>
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