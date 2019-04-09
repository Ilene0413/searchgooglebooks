import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../Utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListBook } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ResultsList from "../../components/Resultslist";



class Books extends Component {
    state = {
        books: [],
        title: "",
        authors: [],
        description: "",
        image: "",
        infoLink: "",
        user: ""
    };
    //run when page will mount
    componentDidMount() {
        this.searchGoogleBooks("");
    }
    //search google books api for title of book

    searchGoogleBooks = query => {
        API.search(query)
            .then(res => {
                console.log(`results`, res.data.items[0].volumeInfo);
                this.setState({
                    books: res.data.items,
                    title: "",
                    authors: [],
                    description: "",
                    image: "",
                    infoLink: "",
                    user: "Ilene"
                })
                console.log(`books `, this.state.books);
                // this.setState({ results: res.data })
            })

            .catch(err => console.log(err));
    };

    loadBooks = () => {
        console.log(`in load books`);
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data.items,
                    title: "",
                    authors: [],
                    description: "",
                    image: "",
                    infoLink: "",
                    user: "Ilene"
                })
            )
            .catch(err => console.log(err));
    };
    saveBook = (event) => {

        //id is returned as a string, so need to convert to integer to determine which picture was clicked
        let id = parseInt(event.target.id);
console.log(`in save book - id`, id);
console.log(`book data`, this.state.title, this.state.authors, this.state.description)
let books = [...this.state.books];
    API.saveBook({
        title: books[id].volumeInfo.title,
        authors: books[id].volumeInfo.authors,
        description: books[id].volumeInfo.description,
        image: books[id].volumeInfo.image,
        infoLink: books[id].volumeInfo.infoLink,
        user: "Ilene"

        // title: this.state.title,
        // authors: this.state.authors,
        // description: this.state.description,
        // image: this.state.image,
        // infoLink: this.state.infoLink,
        // user: "Ilene"
    })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };


    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`title`, this.state.title);
        if (this.state.title) {
            this.searchGoogleBooks(this.state.title);


            // API.search({
            //     title: this.state.title,
            // })
            //     .then(res => this.loadBooks())
            //     .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>
                                Google Books Search
							</h1>
                            <h2> Search and Save Books</h2>
                        </Jumbotron>
                        <form>
                            <h2>Book Search</h2>
                            <Input
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Book Title (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Search for Books
							</FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map((book, index) => {
                                    return (
                                        <ListBook key={book._id}>
                                            title = {book.volumeInfo.title},
                                            authors = {book.volumeInfo.authors}
                                            description = {book.volumeInfo.description}
                                            image = {book.volumeInfo.smallThumbnail}
                                            infoLink = {book.volumeInfo.infoLink}
                                            <button id={index} onClick={this.saveBook}>Save Book</button> }
                                        </ListBook>
                                    );
                                })}
                        </List>
                    ) : (<h3>no results to display</h3>

                        )}
                </Row>
            </Container >
        );
    }
}

export default Books;