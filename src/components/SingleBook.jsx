import React from 'react'
import { Card } from 'react-bootstrap'
import CommentsArea from './CommentsArea'
import MyBadge from './MyBadge'

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Card onClick={() => this.setState({ selected: !this.state.selected })} style={{ border: this.state.selected ? '2px solid red' : 'none' }}>
                    <Card.Img variant="top" src={this.props.book.img} />
                    <MyBadge book={this.props.book} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {
                    this.state.selected && <CommentsArea asin={this.props.book.asin} />
                }
            </>
        )
    }

}

export default SingleBook