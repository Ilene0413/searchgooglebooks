import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
import ViewBtn from "../../components/ViewBtn";
import Viewbook from "../../components/Viewbook";

import API from "../../Utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListBook } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ResultsList from "../../components/Resultslist";



class Books extends Component {
    state = {
        view: false,
        id:"",
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
                console.log('in search googlebooks', this.state.view)
                this.setState({
                    books: res.data.items,
                    title: "",
                    authors: [],
                    // description: "",
                    // image: "",
                    // infoLink: "",
                    // user: "Ilene",
                    view: false
                })
                console.log(`books `, this.state.books);
                // this.setState({ results: res.data })
            })

            .catch(err => console.log(err));
    };

    viewBook = (event) => {
        console.log(`in viewbook`, event.target.id);
        //id is returned as a string, so need to convert to integer to determine which book was clicked
        let id = parseInt(event.target.id);
        let books = [...this.state.books];
        console.log(`in view book  this state.view`, this.state.view)
        this.setState({
            title: books[id].volumeInfo.title,
            authors: books[id].volumeInfo.authors,
            description: books[id].volumeInfo.description,
            image: books[id].volumeInfo.image,
            infoLink: books[id].volumeInfo.infoLink,
            id: id,
            view: true

        })
        console.log(`after set state view book`, this.state.view);
    };

    saveBook = (event) => {
        //id is returned as a string, so need to convert to integer to determine which book was clicked
        let id = parseInt(event.target.id);
        let books = [...this.state.books];
        API.saveBook({
            title: books[id].volumeInfo.title,
            authors: books[id].volumeInfo.authors,
            description: books[id].volumeInfo.description,
            image: books[id].volumeInfo.image,
            infoLink: books[id].volumeInfo.infoLink,
            user: "Ilene"
        })
            .then(res =>
                this.setState({
                    title: "",
                    authors: []
                    // description: "",
                    // image: "",
                    // infoLink: ""
                }))

            // .then(res => this.loadBooks())
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
                                        {console.log (`in list view`, this.state.view)}
                                        {this.state.view && this.state.id === index ?
                                            <Viewbook>
                                                description = {book.volumeInfo.description}
                                                image = {book.volumeInfo.smallThumbnail}
                                                infoLink = {book.volumeInfo.infoLink}
                                                view = false
                                            </Viewbook> : null}

                                        <ViewBtn id={index} onClick={this.viewBook}></ViewBtn>
                                        <SaveBtn id={index} onClick={this.saveBook}></SaveBtn>

                                    </ListBook>
                                );
                            })}
                        </List>
                    ) : (<h3></h3>

                        )}
                </Row>
            </Container >
        );
    }
}

export default Books;