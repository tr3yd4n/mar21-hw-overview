import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends React.Component {

    state = {
        searchQuery: '' // initial state
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Search here</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter search"
                                value={this.state.searchQuery}
                                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(book => (
                        <Col xs={3} key={book.asin}>
                            <SingleBook book={book} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default BookList