import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../Utils/API";

class Detail extends Component {
	state = {
		item: [{}]
	};
	// When this component mounts, grab the item with the _id of this.props.match.params.id
	// e.g. localhost:3000/books/599dcb67f0f16317844583fc
	componentDidMount() {
		API.getItem(this.props.match.params.id)
			.then(res => this.setState({ item: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<h1>
								{
									this
										.state
										.item[0]
										.note
								}{" "}
								by{" "}
								{
									this
										.state
										.item[0]
										.author
								}
							</h1>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col size="md-2">
						<Link to="/">
							← Back to To Do List
						</Link>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Detail;